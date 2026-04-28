import { useState, useEffect, useCallback, useRef } from "react";

const css = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&display=swap');

.spv-wrap { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #1a1a1a; position: relative; padding: 0 24px; }
.spv-header { text-align: center; padding: 32px 24px 8px; }
.spv-header-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(24px,4vw,38px); font-weight: 300; color: #1a1a1a; margin-bottom: 12px; letter-spacing: 0.02em; line-height: 1.2; }
.spv-header-subtitle { font-size: 16px; color: #64748b; max-width: 540px; margin: 0 auto; line-height: 1.6; }
.spv-grid { display: flex !important; flex-wrap: wrap !important; justify-content: center !important; gap: 20px !important; padding: 28px 0 !important; }
.spv-loading, .spv-empty { width: 100%; text-align: center; padding: 3rem 1rem; color: #64748b; font-size: 14px; }
.spv-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; transition: border-color .15s, box-shadow .15s; flex: 0 0 calc(25% - 15px) !important; max-width: calc(25% - 15px) !important; min-width: 0; display: flex; flex-direction: column; }
.spv-card.spv-in-cart { border-color: #1e3433; border-width: 2px; }
.spv-card-img { width: 100%; background: #f1f5f9; display: flex; align-items: center; justify-content: center; color: #94a3b8; font-size: 13px; overflow: hidden; position: relative; }
.spv-card-img img { width: 100%; height: auto; object-fit: contain; display: block; background: #f8f8f6; }
.spv-cart-indicator { position: absolute; top: 8px; right: 8px; background: #1e3433; color: #fff; font-size: 11px; font-weight: 600; padding: 2px 10px; border-radius: 99px; }
.spv-card-body { padding: 14px; display: flex; flex-direction: column; flex: 1; justify-content: space-between; gap: 8px; }
.spv-card-title { font-size: 18px; font-weight: 700; font-family: 'Cormorant Garamond', serif; color: #1a1a1a; margin-bottom: 6px; letter-spacing: 0.02em; min-height: 52px; display: flex; align-items: flex-start; line-height: 1.25; }
.spv-card-price { font-size: 18px; font-weight: 700; font-family: 'Cormorant Garamond', serif; color: #444; margin-bottom: 10px; letter-spacing: 0.02em; }
.spv-card-btn { display: flex !important; width: 100% !important; padding: 9px 0 !important; background: #1e3433 !important; color: #fff !important; border: none !important; border-radius: 8px !important; font-size: 13px !important; font-weight: 600 !important; cursor: pointer !important; align-items: center !important; justify-content: center !important; gap: 6px !important; transition: background .15s !important; }
.spv-card-btn:hover { background: #2d4f4d !important; }
.spv-card-btn.spv-card-btn-added { background: #fff !important; color: #1e3433 !important; border: 1px solid #1e3433 !important; }
.spv-card-btn.spv-card-btn-added:hover { background: #f1f5f9 !important; }
.spv-alert { border-radius: 8px; padding: 10px 14px; font-size: 13px; margin-bottom: 1rem; }
.spv-alert-error { background: #FCEBEB; color: #A32D2D; border: 1px solid #fca5a5; }

/* Product detail modal */
.spv-modal-backdrop { position: fixed; inset: 0; z-index: 9997; background: rgba(0,0,0,.45); display: flex; align-items: center; justify-content: center; padding: 2rem 1rem; overflow-y: auto; }
.spv-modal-card { background: #fff; border-radius: 12px; border: 1px solid #e2e8f0; width: 100%; max-width: 900px; max-height: calc(100vh - 4rem); display: flex; flex-direction: column; overflow: hidden; }
.spv-modal-header { display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.25rem; border-bottom: 1px solid #e2e8f0; }
.spv-modal-title { font-size: 22px; font-weight: 700; font-family: 'Cormorant Garamond', serif; letter-spacing: 0.02em; color: #1a1a1a; }
.spv-modal-close { background: transparent; border: 1px solid #cbd5e1; border-radius: 8px; padding: 6px 12px; font-size: 14px; cursor: pointer; color: #1a1a1a; transition: background .15s; }
.spv-modal-close:hover { background: #f1f5f9; }
.spv-modal-layout { display: flex; flex: 1; min-height: 0; }
.spv-modal-img { width: 50%; min-width: 50%; background-color: #f1f5f9; background-size: cover; background-position: center; border-right: 1px solid #e2e8f0; flex-shrink: 0; display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative; }
.spv-modal-img::before { content: ''; position: absolute; inset: 0; backdrop-filter: blur(28px) saturate(1.1); -webkit-backdrop-filter: blur(28px) saturate(1.1); background: rgba(255,255,255,0.35); }
.spv-modal-img img { position: relative; z-index: 1; max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain; }
.spv-modal-img > span { position: relative; z-index: 1; color: #94a3b8; font-size: 13px; }
.spv-modal-content { flex: 1; padding: 1.5rem; overflow-y: auto; display: flex; flex-direction: column; gap: 14px; }
.spv-modal-price { font-size: 22px; font-weight: 700; font-family: 'Cormorant Garamond', serif; color: #1a1a1a; letter-spacing: 0.02em; }
.spv-modal-desc { font-size: 14px; color: #444; line-height: 1.6; border-bottom: 1px solid #f1f5f9; padding-bottom: 14px; }
.spv-modal-label { font-size: 12px; color: #64748b; margin-bottom: 8px; display: block; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 500; }
.spv-var-group { display: flex; flex-wrap: wrap; gap: 8px; }
.spv-var-pill { display: inline-flex; align-items: center; justify-content: center; padding: 8px 18px; border: 1px solid #cbd5e1; border-radius: 99px; font-size: 13px; font-weight: 500; color: #1a1a1a; background: #fff; cursor: pointer; transition: all .15s; }
.spv-var-pill.selected { background: #1e3433; color: #fff; border-color: #1e3433; }
.spv-var-pill:hover { border-color: #1e3433; }
.spv-qty-row { display: flex; align-items: center; gap: 14px; }
.spv-qty-stepper { display: flex; align-items: center; border: 1px solid #cbd5e1; border-radius: 99px; overflow: hidden; background: #f8fafc; }
.spv-qty-stepper button { background: none; border: none; width: 36px; height: 36px; font-size: 18px; cursor: pointer; color: #1a1a1a; display: flex; align-items: center; justify-content: center; transition: background .15s; }
.spv-qty-stepper button:hover { background: #e2e8f0; }
.spv-qty-stepper input { width: 40px; border: none; background: none; text-align: center; font-size: 14px; font-weight: 500; color: #1a1a1a; outline: none; -moz-appearance: textfield; }
.spv-qty-stepper input::-webkit-outer-spin-button, .spv-qty-stepper input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
.spv-modal-actions { display: flex; gap: 8px; margin-top: 6px; }
.spv-modal-actions > button { flex: 1; }
.spv-modal-action { display: inline-flex !important; padding: 12px 18px !important; background: #1e3433 !important; color: #fff !important; border: none !important; border-radius: 8px !important; font-size: 14px !important; font-weight: 600 !important; cursor: pointer !important; align-items: center !important; justify-content: center !important; gap: 8px !important; transition: background .15s !important; }
.spv-modal-action:hover { background: #2d4f4d !important; }
.spv-modal-action:disabled { opacity: 0.4 !important; cursor: not-allowed !important; }
.spv-modal-action-outline { background: #fff !important; color: #1e3433 !important; border: 1px solid #1e3433 !important; }
.spv-modal-action-outline:hover { background: #f1f5f9 !important; }
@media(max-width: 480px) {
  .spv-modal-actions { flex-direction: column; }
}
.spv-modal-note { font-size: 11px; color: #94a3b8; text-align: center; margin: 0; }
.spv-card-clickable { cursor: pointer; }

/* Floating cart button (matches addons modal palette: white card + dark green button) */
.spv-fab { position: fixed; bottom: 24px; right: 24px; z-index: 9998; width: 60px; height: 60px; border-radius: 50%; background: #1e3433; color: #fff; border: none; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 16px rgba(0,0,0,.25); transition: transform .15s, box-shadow .15s; }
.spv-fab:hover { transform: scale(1.05); box-shadow: 0 6px 20px rgba(0,0,0,.3); background: #2d4f4d; }
.spv-fab-badge { position: absolute; top: -4px; right: -4px; background: #fff; color: #1e3433; font-size: 11px; font-weight: 700; min-width: 22px; height: 22px; border-radius: 99px; display: flex; align-items: center; justify-content: center; padding: 0 6px; border: 1px solid #1e3433; }

/* Cart drawer — Light theme matching the addons modal (white + dark green + cream tones) */
.spv-drawer-overlay { position: fixed; inset: 0; z-index: 9998; background: rgba(0,0,0,.45); opacity: 0; pointer-events: none; transition: opacity .25s; }
.spv-drawer-overlay.spv-open { opacity: 1; pointer-events: auto; }
.spv-drawer { position: fixed; top: 0; right: 0; bottom: 0; z-index: 9999; width: 100%; max-width: 420px; background: #fff; color: #1a1a1a; display: flex; flex-direction: column; transform: translateX(100%); transition: transform .25s ease-out; box-shadow: -8px 0 24px rgba(0,0,0,.15); font-family: 'DM Sans', system-ui, -apple-system, sans-serif; }
.spv-drawer.spv-open { transform: translateX(0); }
.spv-drawer-header { display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.25rem; border-bottom: 1px solid #e2e8f0; }
.spv-drawer-title { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 300; letter-spacing: 0.02em; color: #1a1a1a; }
.spv-drawer-close { background: transparent; border: 1px solid #cbd5e1; border-radius: 8px; padding: 6px 12px; font-size: 14px; cursor: pointer; color: #1a1a1a; line-height: 1; transition: background .15s; }
.spv-drawer-close:hover { background: #f1f5f9; }
.spv-drawer-items { flex: 1; overflow-y: auto; padding: 6px 1.25rem; }
.spv-drawer-empty { padding: 60px 0; text-align: center; color: #94a3b8; font-size: 13px; }
.spv-drawer-item { display: flex; gap: 12px; padding: 14px 0; border-bottom: 1px solid #f1f5f9; align-items: flex-start; }
.spv-drawer-item:last-child { border-bottom: none; }
.spv-drawer-item-img { width: 56px; height: 56px; border-radius: 6px; background: #f1f5f9; overflow: hidden; flex-shrink: 0; display: flex; align-items: center; justify-content: center; color: #94a3b8; font-size: 10px; }
.spv-drawer-item-img img { width: 100%; height: 100%; object-fit: cover; }
.spv-drawer-item-info { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 4px; }
.spv-drawer-item-title { font-size: 14px; font-weight: 500; color: #1a1a1a; line-height: 1.3; }
.spv-drawer-item-price { color: #64748b; font-size: 13px; }
.spv-drawer-item-actions { display: flex; align-items: center; gap: 12px; margin-top: 6px; }
.spv-drawer-qty { display: inline-flex; align-items: center; border: 1px solid #cbd5e1; border-radius: 99px; overflow: hidden; background: #f8fafc; }
.spv-drawer-qty button { background: none; border: none; width: 28px; height: 28px; cursor: pointer; font-size: 16px; color: #1a1a1a; display: flex; align-items: center; justify-content: center; transition: background .15s; }
.spv-drawer-qty button:hover { background: #e2e8f0; }
.spv-drawer-qty span { padding: 0 8px; font-size: 13px; min-width: 24px; text-align: center; font-weight: 500; color: #1a1a1a; }
.spv-drawer-remove { background: none; border: none; color: #94a3b8; cursor: pointer; padding: 6px; display: inline-flex; align-items: center; justify-content: center; transition: color .15s; line-height: 1; }
.spv-drawer-remove:hover { color: #A32D2D; }

/* Welcome Gift line in drawer (matches Shopify checkout style) */
.spv-drawer-gift { display: flex; gap: 12px; padding: 14px 0; border-bottom: 1px solid #f1f5f9; align-items: center; position: relative; }
.spv-drawer-gift:last-child { border-bottom: none; }
.spv-drawer-gift-img { width: 56px; height: 56px; border-radius: 6px; background: #f1f5f9; overflow: hidden; flex-shrink: 0; display: flex; align-items: center; justify-content: center; color: #94a3b8; }
.spv-drawer-gift-img img { width: 100%; height: 100%; object-fit: cover; }
.spv-drawer-gift-info { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 5px; }
.spv-drawer-gift-title { font-size: 14px; font-weight: 500; color: #1a1a1a; line-height: 1.3; }
.spv-drawer-gift-tag { display: inline-flex; align-items: center; gap: 5px; font-size: 10px; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 500; }
.spv-drawer-gift-tag svg { flex-shrink: 0; }
.spv-drawer-gift-price-col { display: flex; flex-direction: column; align-items: flex-end; gap: 2px; flex-shrink: 0; }
.spv-drawer-gift-orig-price { font-size: 12px; color: #94a3b8; text-decoration: line-through; }
.spv-drawer-gift-free { font-size: 13px; color: #1a1a1a; font-weight: 600; letter-spacing: 0.06em; }
.spv-drawer-footer { padding: 1rem 1.25rem; border-top: 1px solid #e2e8f0; background: #fff; }
.spv-drawer-total { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 14px; }
.spv-drawer-total > span:first-child { color: #64748b; font-size: 13px; }
.spv-drawer-total > span:last-child { color: #1a1a1a; font-weight: 600; font-size: 16px; font-family: 'Cormorant Garamond', serif; }
.spv-drawer-checkout { display: flex !important; width: 100% !important; padding: 12px 18px !important; background: #1e3433 !important; color: #fff !important; border: none !important; border-radius: 8px !important; font-size: 13px !important; font-weight: 600 !important; cursor: pointer !important; align-items: center !important; justify-content: center !important; gap: 8px !important; transition: background .15s !important; text-transform: uppercase; letter-spacing: 0.08em; }
.spv-drawer-checkout:hover { background: #2d4f4d !important; }
.spv-drawer-checkout:disabled { opacity: .4 !important; cursor: not-allowed !important; }
.spv-drawer-clear { background: none; border: none; color: #94a3b8; font-size: 11px; cursor: pointer; margin-top: 12px; display: block; margin-left: auto; margin-right: auto; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 600; transition: color .15s; }
.spv-drawer-clear:hover { color: #A32D2D; }

@media(max-width: 1024px) {
  .spv-card { flex: 0 0 calc(50% - 10px) !important; max-width: calc(50% - 10px) !important; }
}
@media(max-width: 768px) {
  .spv-modal-layout { flex-direction: column; }
  .spv-modal-img { width: 100%; height: 220px; min-height: 220px; border-right: none; border-bottom: 1px solid #e2e8f0; }
  .spv-modal-content { padding: 1rem; }
  .spv-modal-card { max-width: 100%; }
}
@media(max-width: 600px) {
  .spv-card { flex: 0 0 100% !important; max-width: 100% !important; }
  .spv-fab { bottom: 16px; right: 16px; }
  .spv-drawer { max-width: 100%; }
}
`;

const PRODUCTS_QUERY = `{
  products(first: 250) {
    edges {
      node {
        id handle title vendor description productType
        featuredImage { url }
        priceRange { minVariantPrice { amount currencyCode } }
        variants(first: 30) { edges { node { id title price { amount currencyCode } availableForSale } } }
      }
    }
  }
}`;

function fmt(amount) {
  const num = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(parseFloat(amount));
  return "$" + num;
}

function fmtRange(priceRange, variants) {
  if (variants?.edges?.length) return fmt(variants.edges[0].node.price.amount);
  return fmt(priceRange.minVariantPrice.amount);
}

function varId(gid) { return gid.split("/").pop(); }

const TRANSLATIONS = {
  es: {
    headerTitle: "",
    headerSubtitle: "",
    cart: "Carrito",
    clear: "Vaciar carrito",
    checkout: "Ir al checkout",
    estimatedTotal: "Subtotal",
    addToCart: "Agregar al carrito",
    added: "Agregado",
    loading: "Cargando productos...",
    noProducts: "No se encontraron productos.",
    noImage: "Sin imagen",
    emptyCart: "Tu carrito está vacío",
    inCart: "En carrito",
    remove: "Eliminar",
    free: "Gratis",
    complimentary: "Cortesía",
    giftNote: "Incluido con tu compra",
    quantity: "Cantidad",
    option: "Opción",
    configError: "Configura storeUrl y storefrontToken en las props.",
  },
  en: {
    headerTitle: "",
    headerSubtitle: "",
    cart: "Cart",
    clear: "Clear cart",
    checkout: "Proceed to checkout",
    estimatedTotal: "Subtotal",
    addToCart: "Add to cart",
    added: "Added",
    loading: "Loading products...",
    noProducts: "No products found.",
    noImage: "No image",
    emptyCart: "Your cart is empty",
    inCart: "In cart",
    remove: "Remove",
    free: "Free",
    complimentary: "Complimentary",
    giftNote: "Included with your purchase",
    quantity: "Quantity",
    option: "Option",
    configError: "Please configure storeUrl and storefrontToken props.",
  },
};

const BagIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);

const TrashIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/>
  </svg>
);

const GiftIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
  </svg>
);

const TagIcon = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>
  </svg>
);

const CART_STORAGE_KEY = "everlake-cart-v1";

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch { return []; }
}

function saveCart(cart) {
  try { localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart)); } catch {}
}

function getDevice() {
  const isMobile = typeof window !== "undefined" && window.matchMedia && window.matchMedia('(max-width: 768px)').matches;
  return isMobile ? 'mobile' : 'desktop';
}

function ProductCard({ product, qtyInCart, onAdd, onOpen, t }) {
  const cardRef = useRef(null);

  // 10-second dwell tracking — fires once per product card per session.
  useEffect(() => {
    const el = cardRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    let timer = null;
    let fired = false;

    const fire = () => {
      if (fired) return;
      fired = true;
      const device = getDevice();
      try {
        window.gtag && window.gtag('event', 'coupon_card_dwell_10s', {
          product_id: product.id,
          product_title: product.title,
          device,
        });
      } catch {}
      try {
        window.fbq && window.fbq('trackCustom', 'CouponCardDwell10s', {
          product_id: product.id,
          product_title: product.title,
          device,
        });
      } catch {}
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            if (!timer && !fired) timer = window.setTimeout(fire, 10_000);
          } else {
            if (timer) { clearTimeout(timer); timer = null; }
          }
        }
      },
      { threshold: [0, 0.5, 1] }
    );
    io.observe(el);
    return () => {
      if (timer) clearTimeout(timer);
      io.disconnect();
    };
  }, [product.id, product.title]);

  const handleAdd = (e) => {
    e.stopPropagation();
    const device = getDevice();
    try {
      window.gtag && window.gtag('event', 'add_to_cart', {
        product_id: product.id,
        product_title: product.title,
        device,
      });
    } catch {}
    try {
      window.fbq && window.fbq('track', 'AddToCart', {
        content_name: product.title,
        content_ids: [product.id],
        device,
      });
    } catch {}
    onAdd();
  };

  const inCart = qtyInCart > 0;

  const handleOpen = () => onOpen && onOpen();

  return (
    <div ref={cardRef} className={`spv-card ${inCart ? 'spv-in-cart' : ''}`}>
      <div
        className="spv-card-img spv-card-clickable"
        onClick={handleOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter") handleOpen(); }}
      >
        {product.featuredImage
          ? <img src={product.featuredImage.url} alt={product.title} />
          : <span>{t.noImage}</span>}
        {inCart && <span className="spv-cart-indicator">{qtyInCart} {t.inCart}</span>}
      </div>
      <div className="spv-card-body">
        <div className="spv-card-title spv-card-clickable" onClick={handleOpen}>{product.title}</div>
        <div className="spv-card-price">{fmtRange(product.priceRange, product.variants)}</div>
        <button
          className={`spv-card-btn ${inCart ? 'spv-card-btn-added' : ''}`}
          onClick={handleAdd}
        >
          <BagIcon /> {inCart ? `${t.added} (${qtyInCart})` : t.addToCart}
        </button>
      </div>
    </div>
  );
}

function ProductModal({ product, onClose, onAddToCart, onCheckout, t }) {
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [qty, setQty] = useState(1);

  const variants = product.variants.edges;
  const selectedVariant = variants[selectedVariantIdx]?.node;

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleAdd = () => {
    if (!selectedVariant) return;
    onAddToCart(product, selectedVariant, qty);
    onClose();
  };

  const handleCheckout = () => {
    if (!selectedVariant) return;
    onCheckout(product, selectedVariant, qty);
    onClose();
  };

  return (
    <div
      className="spv-modal-backdrop"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="spv-modal-card">
        <div className="spv-modal-header">
          <div className="spv-modal-title">{product.title}</div>
          <button className="spv-modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="spv-modal-layout">
          <div
            className="spv-modal-img"
            style={product.featuredImage
              ? { backgroundImage: `url(${product.featuredImage.url})` }
              : undefined}
          >
            {product.featuredImage
              ? <img src={product.featuredImage.url} alt={product.title} />
              : <span>{t.noImage}</span>}
          </div>
          <div className="spv-modal-content">
            <div className="spv-modal-price">{fmt(selectedVariant?.price?.amount || product.priceRange.minVariantPrice.amount)}</div>
            {product.description && <div className="spv-modal-desc">{product.description}</div>}
            {variants.length > 1 && (
              <div>
                <label className="spv-modal-label">{t.option}</label>
                <div className="spv-var-group">
                  {variants.map((e, i) => (
                    <button
                      key={e.node.id}
                      className={`spv-var-pill ${i === selectedVariantIdx ? "selected" : ""}`}
                      onClick={() => setSelectedVariantIdx(i)}
                      disabled={!e.node.availableForSale}
                    >
                      {e.node.title}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div className="spv-qty-row">
              <label className="spv-modal-label" style={{ marginBottom: 0 }}>{t.quantity}</label>
              <div className="spv-qty-stepper">
                <button onClick={() => setQty(q => Math.max(1, q - 1))} aria-label="-">−</button>
                <input
                  type="number"
                  value={qty}
                  onChange={(e) => setQty(Math.min(99, Math.max(1, parseInt(e.target.value) || 1)))}
                />
                <button onClick={() => setQty(q => Math.min(99, q + 1))} aria-label="+">+</button>
              </div>
            </div>
            <div className="spv-modal-actions">
              <button
                className="spv-modal-action spv-modal-action-outline"
                onClick={handleAdd}
                disabled={!selectedVariant || !selectedVariant.availableForSale}
              >
                <BagIcon size={16} /> {t.addToCart}
              </button>
              <button
                className="spv-modal-action"
                onClick={handleCheckout}
                disabled={!selectedVariant || !selectedVariant.availableForSale}
              >
                {t.checkout}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartDrawer({ open, items, welcomeGift, hasPerkInCart, onClose, onUpdateQty, onRemove, onClear, onCheckout, t }) {
  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const total = items.reduce((sum, i) => sum + i.qty * parseFloat(i.price), 0);
  const currency = items[0]?.currencyCode || "USD";

  return (
    <>
      <div
        className={`spv-drawer-overlay ${open ? 'spv-open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`spv-drawer ${open ? 'spv-open' : ''}`}
        role="dialog"
        aria-label={t.cart}
        aria-hidden={!open}
      >
        <div className="spv-drawer-header">
          <div className="spv-drawer-title">{t.cart}</div>
          <button className="spv-drawer-close" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="spv-drawer-items">
          {items.length === 0 ? (
            <div className="spv-drawer-empty">{t.emptyCart}</div>
          ) : (
            <>
              {items.map(item => (
                <div key={item.variantId} className="spv-drawer-item">
                  <div className="spv-drawer-item-img">
                    {item.image
                      ? <img src={item.image} alt={item.title} />
                      : <span>{t.noImage}</span>}
                  </div>
                  <div className="spv-drawer-item-info">
                    <div className="spv-drawer-item-title">{item.title}</div>
                    <div className="spv-drawer-item-price">
                      {fmt(item.price)} {item.currencyCode}
                    </div>
                    <div className="spv-drawer-item-actions">
                      <div className="spv-drawer-qty">
                        <button onClick={() => onUpdateQty(item.variantId, item.qty - 1)} aria-label="-">−</button>
                        <span>{item.qty}</span>
                        <button onClick={() => onUpdateQty(item.variantId, item.qty + 1)} aria-label="+">+</button>
                      </div>
                      <button
                        className="spv-drawer-remove"
                        onClick={() => onRemove(item.variantId)}
                        aria-label={t.remove}
                        title={t.remove}
                      >
                        <TrashIcon size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {hasPerkInCart && welcomeGift && (() => {
                const giftVariant = welcomeGift.variants.edges[0]?.node;
                const origPrice = giftVariant?.price?.amount;
                return (
                  <div className="spv-drawer-gift">
                    <div className="spv-drawer-gift-img">
                      {welcomeGift.featuredImage?.url
                        ? <img src={welcomeGift.featuredImage.url} alt={welcomeGift.title} />
                        : <GiftIcon size={24} />}
                    </div>
                    <div className="spv-drawer-gift-info">
                      <div className="spv-drawer-gift-title">{welcomeGift.title}</div>
                      <div className="spv-drawer-gift-tag">
                        <TagIcon size={11} />
                        {welcomeGift.title.toUpperCase()}{origPrice ? ` (-${fmt(origPrice)})` : ''}
                      </div>
                    </div>
                    <div className="spv-drawer-gift-price-col">
                      {origPrice && <span className="spv-drawer-gift-orig-price">{fmt(origPrice)}</span>}
                      <span className="spv-drawer-gift-free">{t.free.toUpperCase()}</span>
                    </div>
                  </div>
                );
              })()}
            </>
          )}
        </div>
        <div className="spv-drawer-footer">
          <div className="spv-drawer-total">
            <span>{t.estimatedTotal}</span>
            <span>{fmt(total)} {currency}</span>
          </div>
          <button
            className="spv-drawer-checkout"
            onClick={onCheckout}
            disabled={items.length === 0}
          >
            <BagIcon size={16} /> {t.checkout}
          </button>
          {items.length > 0 && (
            <button className="spv-drawer-clear" onClick={onClear}>
              {t.clear}
            </button>
          )}
        </div>
      </aside>
    </>
  );
}

export default function ShopifyProducts({
  storeUrl,
  storefrontToken,
  apiVersion = "2025-01",
  lang = "es",
  title,
  subtitle,
}) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.es;
  const displayTitle = title || t.headerTitle;
  const displaySubtitle = subtitle || t.headerSubtitle;
  const [products, setProducts] = useState([]);
  const [welcomeGift, setWelcomeGift] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState(() => loadCart());
  const [cartOpen, setCartOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);

  useEffect(() => { saveCart(cart); }, [cart]);

  const fetchProducts = useCallback(async () => {
    if (!storeUrl || !storefrontToken) { setError(t.configError); setLoading(false); return; }
    setLoading(true); setError(null);
    try {
      const res = await fetch(`https://${storeUrl}/api/${apiVersion}/graphql.json`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Shopify-Storefront-Access-Token": storefrontToken },
        body: JSON.stringify({ query: PRODUCTS_QUERY }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (data.errors) throw new Error(data.errors[0]?.message || "GraphQL error");
      const allProducts = (data?.data?.products?.edges || []).map(e => e.node);
      const isPerkCoupon = (p) =>
        (p.productType || "").toLowerCase() === "perk coupons" ||
        /\bnight\b.*\bstay\b/i.test(p.title);
      const isWelcomeGift = (p) =>
        (p.productType || "").toLowerCase() === "welcome gift" ||
        p.title.toLowerCase().includes("welcome gift");
      // Solo lo consideramos disponible si tiene stock real (alguna variante availableForSale).
      const giftProduct = allProducts.find(
        (p) => isWelcomeGift(p) && p.variants.edges.some((e) => e.node.availableForSale)
      ) || null;
      const visible = allProducts
        .filter(p => !isWelcomeGift(p) && p.variants.edges.some(e => e.node.availableForSale))
        .sort((a, b) => {
          // Perk Coupons first, then everything else.
          const aPerk = isPerkCoupon(a) ? 0 : 1;
          const bPerk = isPerkCoupon(b) ? 0 : 1;
          return aPerk - bPerk;
        });
      // Tag perks so we can detect them in the cart later
      visible.forEach(p => { p.__isPerkCoupon = isPerkCoupon(p); });
      setProducts(visible);
      setWelcomeGift(giftProduct);
    } catch (err) { setError(`${t.loading} ${err.message}`); }
    finally { setLoading(false); }
  }, [storeUrl, storefrontToken, apiVersion, t.configError, t.loading]);

  useEffect(() => { fetchProducts(); }, [fetchProducts]);

  const findVariant = (product) => product.variants.edges[0]?.node;

  const addToCart = (product, variant = null, qty = 1) => {
    const v = variant || findVariant(product);
    if (!v) return;
    setCart(prev => {
      const existing = prev.find(i => i.variantId === v.id);
      if (existing) {
        return prev.map(i => i.variantId === v.id ? { ...i, qty: Math.min(99, i.qty + qty) } : i);
      }
      return [...prev, {
        variantId: v.id,
        productId: product.id,
        title: product.title,
        variantTitle: v.title,
        image: product.featuredImage?.url || null,
        price: v.price.amount,
        currencyCode: v.price.currencyCode,
        qty,
        isPerkCoupon: !!product.__isPerkCoupon,
      }];
    });
  };

  const updateQty = (variantId, qty) => {
    if (qty <= 0) {
      setCart(prev => prev.filter(i => i.variantId !== variantId));
      return;
    }
    setCart(prev => prev.map(i => i.variantId === variantId ? { ...i, qty: Math.min(99, qty) } : i));
  };

  const removeFromCart = (variantId) => {
    setCart(prev => prev.filter(i => i.variantId !== variantId));
  };

  const clearCart = () => setCart([]);

  const checkout = () => {
    if (!cart.length || !storeUrl) return;
    const parts = cart.map(i => `${varId(i.variantId)}:${i.qty}`).join(',');
    const device = getDevice();
    const total = cart.reduce((sum, i) => sum + i.qty * parseFloat(i.price), 0);
    const currency = cart[0]?.currencyCode || 'USD';
    try {
      window.fbq && window.fbq('track', 'InitiateCheckout', {
        content_name: 'VIP Cart Checkout',
        num_items: cart.reduce((s, i) => s + i.qty, 0),
        value: total,
        currency,
        device,
      });
    } catch {}
    try {
      window.gtag && window.gtag('event', 'coupon_checkout_click', {
        flow: 'cart_checkout',
        items_count: cart.length,
        units_count: cart.reduce((s, i) => s + i.qty, 0),
        value: total,
        currency,
        device,
      });
    } catch {}
    window.open(`https://${storeUrl}/cart?autoadd=${parts}`, "_blank");
    // Vaciar el cart local después de mandar al checkout
    setCart([]);
    setCartOpen(false);
  };

  // Checkout directo desde el modal: combina cart actual + producto seleccionado
  const checkoutNow = (product, variant, qty) => {
    const v = variant || findVariant(product);
    if (!v || !storeUrl) return;
    const merged = new Map(cart.map(i => [i.variantId, i.qty]));
    merged.set(v.id, Math.min(99, (merged.get(v.id) || 0) + qty));
    const parts = Array.from(merged.entries())
      .map(([vid, q]) => `${varId(vid)}:${q}`)
      .join(',');
    const device = getDevice();
    try {
      window.gtag && window.gtag('event', 'coupon_checkout_click', {
        flow: 'modal_buy_now',
        product_id: product.id,
        product_title: product.title,
        device,
      });
    } catch {}
    window.open(`https://${storeUrl}/cart?autoadd=${parts}`, "_blank");
    setCart([]);
    setCartOpen(false);
  };

  const itemCount = cart.reduce((sum, i) => sum + i.qty, 0);
  const cartByVariant = new Map(cart.map(i => [i.variantId, i.qty]));
  const hasPerkInCart = cart.some(i => i.isPerkCoupon);

  return (
    <>
      <style>{css}</style>
      <div className="spv-wrap">
        <div className="spv-header">
          <h2 className="spv-header-title">{displayTitle}</h2>
          <p className="spv-header-subtitle">{displaySubtitle}</p>
        </div>
        {error && <div className="spv-alert spv-alert-error">{error}</div>}
        <div className="spv-grid">
          {loading ? (
            <div className="spv-loading">{t.loading}</div>
          ) : products.length === 0 ? (
            <div className="spv-empty">{t.noProducts}</div>
          ) : (
            products.map(p => {
              const v = findVariant(p);
              return (
                <ProductCard
                  key={p.id}
                  product={p}
                  qtyInCart={v ? (cartByVariant.get(v.id) || 0) : 0}
                  onAdd={() => addToCart(p)}
                  onOpen={() => setModalProduct(p)}
                  t={t}
                />
              );
            })
          )}
        </div>
      </div>

      {itemCount > 0 && !cartOpen && (
        <button
          className="spv-fab"
          onClick={() => setCartOpen(true)}
          aria-label={t.cart}
        >
          <BagIcon size={22} />
          <span className="spv-fab-badge">{itemCount}</span>
        </button>
      )}

      <CartDrawer
        open={cartOpen}
        items={cart}
        welcomeGift={welcomeGift}
        hasPerkInCart={hasPerkInCart}
        onClose={() => setCartOpen(false)}
        onUpdateQty={updateQty}
        onRemove={removeFromCart}
        onClear={clearCart}
        onCheckout={checkout}
        t={t}
      />

      {modalProduct && (
        <ProductModal
          product={modalProduct}
          onClose={() => setModalProduct(null)}
          onAddToCart={addToCart}
          onCheckout={checkoutNow}
          t={t}
        />
      )}
    </>
  );
}
