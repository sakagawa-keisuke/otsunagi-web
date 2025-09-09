// Site-wide UI controls driven by Content Manager collection "SiteConfig".
// Expected collection (read-only for public): SiteConfig with primary key 'main'
// Fields (suggested):
// - showBanner: boolean
// - layoutVariant: 'A' | 'B'
// - heroTitle: string
// - heroImage: string (image URL)

import wixData from 'wix-data';

const CONFIG_COLLECTION = 'SiteConfig';
const CONFIG_ID = 'main';

export async function applySiteConfig() {
  const cfg = await loadConfigSafe();
  if (!cfg) return;

  // Banner visibility toggle (optional element)
  toggleElementVisibility('#promoStrip', !!cfg.showBanner);

  // Hero variant toggle (expects two sections with these IDs; safely no-op if missing)
  const variant = cfg.layoutVariant === 'B' ? 'B' : 'A';
  if (variant === 'A') {
    showIfExists('#heroA');
    hideIfExists('#heroB');
  } else {
    hideIfExists('#heroA');
    showIfExists('#heroB');
  }

  // Text/image bindings for common hero elements (apply to both variants if present)
  setTextIfExists('#heroTitleA', cfg.heroTitle);
  setTextIfExists('#heroTitleB', cfg.heroTitle);
  setImageIfExists('#heroImageA', cfg.heroImage);
  setImageIfExists('#heroImageB', cfg.heroImage);
}

async function loadConfigSafe() {
  try {
    return await wixData.get(CONFIG_COLLECTION, CONFIG_ID);
  } catch (e) {
    console.error('SiteConfig load failed', e);
    return null;
  }
}

function elementOrNull(selector) {
  try { return $w(selector); } catch { return null; }
}

function toggleElementVisibility(selector, visible) {
  const el = elementOrNull(selector);
  if (!el) return;
  if (visible) {
    try { el.expand ? el.expand() : el.show && el.show(); } catch {}
  } else {
    try { el.collapse ? el.collapse() : el.hide && el.hide(); } catch {}
  }
}

function showIfExists(selector) { toggleElementVisibility(selector, true); }
function hideIfExists(selector) { toggleElementVisibility(selector, false); }

function setTextIfExists(selector, value) {
  if (value == null) return;
  const el = elementOrNull(selector);
  if (!el) return;
  try { el.text = String(value); } catch {}
}

function setImageIfExists(selector, src) {
  if (!src) return;
  const el = elementOrNull(selector);
  if (!el) return;
  try { el.src = String(src); } catch {}
}

