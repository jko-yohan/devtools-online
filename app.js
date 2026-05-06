// Tab Navigation
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tool-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById('tool-' + tab.dataset.tool).classList.add('active');
    });
});

// Toast notification
function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

// Copy to clipboard
function copyOutput(id) {
    const el = document.getElementById(id);
    const text = el.textContent || el.innerText;
    if (!text.trim()) return showToast('Nothing to copy');
    navigator.clipboard.writeText(text).then(() => showToast('Copied!'));
}

// Clear fields
function clearFields(...ids) {
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el.tagName === 'TEXTAREA') el.value = '';
        else el.textContent = '';
    });
}

// ===== JSON Formatter =====
function formatJSON() {
    const input = document.getElementById('json-input').value.trim();
    const output = document.getElementById('json-output');
    if (!input) return;
    try {
        const parsed = JSON.parse(input);
        output.textContent = JSON.stringify(parsed, null, 2);
        output.style.color = 'var(--text)';
    } catch (e) {
        output.textContent = 'Invalid JSON: ' + e.message;
        output.style.color = 'var(--error)';
    }
}

function minifyJSON() {
    const input = document.getElementById('json-input').value.trim();
    const output = document.getElementById('json-output');
    if (!input) return;
    try {
        const parsed = JSON.parse(input);
        output.textContent = JSON.stringify(parsed);
        output.style.color = 'var(--text)';
    } catch (e) {
        output.textContent = 'Invalid JSON: ' + e.message;
        output.style.color = 'var(--error)';
    }
}

// ===== Text Counter =====
function countText() {
    const text = document.getElementById('text-input').value;
    document.getElementById('char-count').textContent = text.length;
    document.getElementById('char-no-space').textContent = text.replace(/\s/g, '').length;
    document.getElementById('word-count').textContent = text.trim() ? text.trim().split(/\s+/).length : 0;
    document.getElementById('sentence-count').textContent = text.trim() ? (text.match(/[.!?]+/g) || []).length || (text.trim() ? 1 : 0) : 0;
    document.getElementById('paragraph-count').textContent = text.trim() ? text.split(/\n\s*\n/).filter(p => p.trim()).length : 0;
    document.getElementById('byte-count').textContent = new Blob([text]).size;
}

// ===== Color Palette =====
function hslToHex(h, s, l) {
    s /= 100; l /= 100;
    const a = s * Math.min(l, 1 - l);
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return '#' + f(0) + f(8) + f(4);
}

function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
}

function generatePalette(mode) {
    const container = document.getElementById('palette-display');
    container.innerHTML = '';
    const colors = [];
    const baseHue = Math.floor(Math.random() * 360);

    for (let i = 0; i < 5; i++) {
        let h, s, l;
        switch (mode) {
            case 'mono':
                h = baseHue;
                s = 60 + Math.random() * 30;
                l = 20 + i * 15;
                break;
            case 'pastel':
                h = (baseHue + i * 72) % 360;
                s = 50 + Math.random() * 20;
                l = 75 + Math.random() * 15;
                break;
            case 'dark':
                h = (baseHue + i * 72) % 360;
                s = 40 + Math.random() * 40;
                l = 10 + Math.random() * 25;
                break;
            default:
                h = (baseHue + i * 72 + Math.random() * 30) % 360;
                s = 50 + Math.random() * 40;
                l = 35 + Math.random() * 35;
        }
        colors.push(hslToHex(Math.round(h), Math.round(s), Math.round(l)));
    }

    colors.forEach(hex => {
        const card = document.createElement('div');
        card.className = 'palette-card';
        card.innerHTML = `
            <div class="palette-swatch" style="background:${hex}"></div>
            <div class="palette-info">
                <div class="palette-hex">${hex.toUpperCase()}</div>
                <div class="palette-rgb">${hexToRgb(hex)}</div>
            </div>
        `;
        card.addEventListener('click', () => {
            navigator.clipboard.writeText(hex.toUpperCase()).then(() => showToast('Copied ' + hex.toUpperCase()));
        });
        container.appendChild(card);
    });
}

function exportPaletteCSS() {
    const cards = document.querySelectorAll('.palette-hex');
    if (!cards.length) return showToast('Generate a palette first');
    const output = document.getElementById('color-output');
    let css = ':root {\n';
    cards.forEach((card, i) => {
        css += `    --color-${i + 1}: ${card.textContent};\n`;
    });
    css += '}';
    output.textContent = css;
    output.style.display = 'block';
}

// Init palette on load
generatePalette();

// ===== Base64 =====
function encodeBase64() {
    const input = document.getElementById('base64-input').value;
    if (!input) return;
    try {
        document.getElementById('base64-output').textContent = btoa(unescape(encodeURIComponent(input)));
    } catch (e) {
        document.getElementById('base64-output').textContent = 'Error: ' + e.message;
    }
}

function decodeBase64() {
    const input = document.getElementById('base64-input').value;
    if (!input) return;
    try {
        document.getElementById('base64-output').textContent = decodeURIComponent(escape(atob(input)));
    } catch (e) {
        document.getElementById('base64-output').textContent = 'Invalid Base64: ' + e.message;
    }
}

// ===== URL Encode/Decode =====
function encodeURL() {
    const input = document.getElementById('url-input').value;
    if (!input) return;
    document.getElementById('url-output').textContent = encodeURIComponent(input);
}

function decodeURL() {
    const input = document.getElementById('url-input').value;
    if (!input) return;
    try {
        document.getElementById('url-output').textContent = decodeURIComponent(input);
    } catch (e) {
        document.getElementById('url-output').textContent = 'Invalid encoded URL: ' + e.message;
    }
}

// ===== Hash Generator =====
async function generateHashes() {
    const input = document.getElementById('hash-input').value;
    if (!input) return;
    const container = document.getElementById('hash-output');
    container.innerHTML = '<p style="color:var(--text-muted)">Generating...</p>';

    const encoder = new TextEncoder();
    const data = encoder.encode(input);

    const algorithms = ['SHA-1', 'SHA-256', 'SHA-384', 'SHA-512'];
    const results = [];

    for (const algo of algorithms) {
        const hashBuffer = await crypto.subtle.digest(algo, data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        results.push({ algo, hash: hashHex });
    }

    container.innerHTML = results.map(r => `
        <div class="hash-row">
            <span class="hash-label">${r.algo}</span>
            <span class="hash-value">${r.hash}</span>
            <button class="hash-copy" onclick="navigator.clipboard.writeText('${r.hash}').then(()=>showToast('Copied!'))">Copy</button>
        </div>
    `).join('');
}

// URL hash routing
function handleHash() {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
        const tab = document.querySelector(`.tab[data-tool="${hash}"]`);
        if (tab) tab.click();
    }
}
window.addEventListener('hashchange', handleHash);
handleHash();
