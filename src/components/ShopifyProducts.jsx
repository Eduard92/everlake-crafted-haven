import { useState, useEffect, useCallback, useContext } from "react";
import { useLanguage } from "../i18n/LanguageContext";

const css = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&display=swap');

.spv-wrap { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #1a1a1a; position: relative; padding: 0 24px; }
.spv-header { text-align: center; padding: 32px 24px 8px; }
.spv-header-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(24px,4vw,38px); font-weight: 300; color: #1a1a1a; margin-bottom: 12px; letter-spacing: 0.02em; line-height: 1.2; }
.spv-header-subtitle { font-size: 16px; color: #64748b; max-width: 540px; margin: 0 auto; line-height: 1.6; }
.spv-cart-bar { background: #fff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1rem 1.25rem; margin-bottom: 1.25rem; }
.spv-cart-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
.spv-cart-title { font-size: 14px; font-weight: 600; }
.spv-cart-actions { display: flex; gap: 8px; align-items: center; }
.spv-cart-item { display: flex; align-items: center; gap: 8px; padding: 6px 0; border-bottom: 1px solid #f1f5f9; font-size: 13px; }
.spv-cart-item:last-child { border-bottom: none; }
.spv-cart-item-name { flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-weight: 500; }
.spv-cart-item-sub { font-size: 11px; color: #64748b; }
.spv-cart-item-price { font-weight: 600; white-space: nowrap; font-size: 13px; }
.spv-cart-total { display: flex; justify-content: space-between; padding-top: 10px; margin-top: 6px; border-top: 1px solid #e2e8f0; font-size: 14px; font-weight: 600; }
.spv-btn-green { background: #1e3433 !important; color: #fff !important; border: none !important; border-radius: 8px !important; padding: 12px 18px !important; font-size: 14px !important; font-weight: 600 !important; cursor: pointer !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; gap: 8px !important; width: 100% !important; transition: background .15s !important; }
.spv-btn-green:hover { background: #2d4f4d !important; }
.spv-btn-green:disabled { opacity: .4 !important; cursor: not-allowed !important; }
.spv-btn-sm { width: auto !important; padding: 6px 14px !important; font-size: 13px !important; }
.spv-btn-sec { background: transparent; border: 1px solid #cbd5e1; border-radius: 8px; padding: 7px 14px; font-size: 13px; cursor: pointer; color: #1a1a1a; }
.spv-btn-sec:hover { background: #f1f5f9; }
.spv-btn-danger { background: transparent; border: 1px solid #fca5a5; border-radius: 8px; padding: 4px 10px; font-size: 12px; cursor: pointer; color: #A32D2D; }
.spv-btn-danger:hover { background: #FCEBEB; }
.spv-grid { display: flex !important; flex-wrap: wrap !important; justify-content: center !important; gap: 20px !important; padding: 28px 0 !important; }
.spv-loading, .spv-empty { width: 100%; text-align: center; padding: 3rem 1rem; color: #64748b; font-size: 14px; }
.spv-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; cursor: pointer; transition: border-color .15s, box-shadow .15s; flex: 0 0 350px !important; max-width: 350px !important; display: flex; flex-direction: column; }
.spv-card:hover { border-color: #94a3b8; box-shadow: 0 2px 8px rgba(0,0,0,.06); }
.spv-card.spv-in-cart { border-color: #1e3433; border-width: 2px; }
.spv-card-img { width: 100%; background: #f1f5f9; display: flex; align-items: center; justify-content: center; color: #94a3b8; font-size: 13px; overflow: hidden; position: relative; }
.spv-card-img img { width: 100%; height: auto; object-fit: contain; display: block; background: #f8f8f6; }
.spv-cart-indicator { position: absolute; top: 8px; right: 8px; background: #1e3433; color: #fff; font-size: 11px; font-weight: 600; padding: 2px 8px; border-radius: 99px; }
.spv-card-body { padding: 14px; display: flex; flex-direction: column; flex: 1; justify-content: space-between; }
.spv-card-title { font-size: 15px; font-weight: 300; font-family: 'Cormorant Garamond', serif; color: #1a1a1a; margin-bottom: 5px; letter-spacing: 0.02em; min-height: 48px; display: flex; align-items: flex-start; }
.spv-card-price { font-size: 14px; color: #444; margin-bottom: 10px; }
.spv-card-btn { display: flex !important; width: 100% !important; padding: 9px 0 !important; background: #1e3433 !important; color: #fff !important; border: none !important; border-radius: 8px !important; font-size: 13px !important; font-weight: 600 !important; cursor: pointer !important; align-items: center !important; justify-content: center !important; gap: 6px !important; transition: background .15s !important; }
.spv-card-btn:hover { background: #2d4f4d !important; }
.spv-alert { border-radius: 8px; padding: 10px 14px; font-size: 13px; margin-bottom: 1rem; }
.spv-alert-error { background: #FCEBEB; color: #A32D2D; border: 1px solid #fca5a5; }
.spv-modal-backdrop { position: fixed; inset: 0; z-index: 99999; background: rgba(0,0,0,.45); display: flex; align-items: center; justify-content: center; padding: 2rem 1rem; overflow-y: auto; }
.spv-modal-card { background: #fff; border-radius: 12px; border: 1px solid #e2e8f0; width: 100%; max-width: 900px; }
.spv-modal-header { display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.25rem; border-bottom: 1px solid #e2e8f0; }
.spv-modal-title { font-size: 16px; font-weight: 300; font-family: 'Cormorant Garamond', serif; letter-spacing: 0.02em; }
.spv-modal-layout { display: flex; }
.spv-modal-img { width: 60%; min-width: 60%; min-height: 400px; background: #fff; border-right: 1px solid #e2e8f0; flex-shrink: 0; display: flex; align-items: center; justify-content: center; overflow: hidden; }
.spv-modal-img img { width: 100%; height: 100%; min-height: 400px; object-fit: contain; }
.spv-modal-content { flex: 1; padding: 1.25rem; overflow-y: auto; display: flex; flex-direction: column; gap: 12px; }
.spv-modal-price { font-size: 22px; font-weight: 300; font-family: 'Cormorant Garamond', serif; color: #1a1a1a; letter-spacing: 0.02em; }
.spv-modal-desc { font-size: 14px; color: #444; line-height: 1.6; border-bottom: 1px solid #f1f5f9; padding-bottom: 14px; }
.spv-note { font-size: 11px; color: #94a3b8; text-align: center; }
.spv-var-group { display: flex; flex-wrap: wrap; gap: 8px; }
.spv-var-pill { display: inline-flex; align-items: center; justify-content: center; padding: 8px 18px; border: 1px solid #cbd5e1; border-radius: 99px; font-size: 13px; font-weight: 500; color: #1a1a1a; background: #fff; cursor: pointer; transition: all .15s; }
.spv-var-pill.selected { background: #1e3433; color: #fff; border-color: #1e3433; }
.spv-var-pill:hover { border-color: #1e3433; }
.spv-qty-row { display: flex; align-items: center; gap: 10px; }
.spv-qty-row label { font-size: 13px; color: #64748b; }
.spv-qty-stepper { display: flex; align-items: center; border: 1px solid #cbd5e1; border-radius: 99px; overflow: hidden; background: #f8fafc; }
.spv-qty-stepper button { background: none; border: none; width: 36px; height: 36px; font-size: 18px; cursor: pointer; color: #1a1a1a; display: flex; align-items: center; justify-content: center; transition: background .15s; }
.spv-qty-stepper button:hover { background: #e2e8f0; }
.spv-qty-stepper input { width: 40px; border: none; background: none; text-align: center; font-size: 14px; font-weight: 500; color: #1a1a1a; outline: none; -moz-appearance: textfield; }
.spv-qty-stepper input::-webkit-outer-spin-button, .spv-qty-stepper input::-webkit-inner-spin-button { -webkit-appearance: none; }
@media(max-width: 768px) {
  .spv-modal-layout { flex-direction: column; }
  .spv-modal-img { width: 100%; min-height: 200px; border-right: none; border-bottom: 1px solid #e2e8f0; }
  .spv-modal-img img { min-height: 200px; }
  .spv-modal-content { padding: 1rem; }
  .spv-modal-card { max-width: 100%; }
  .spv-card { flex: 0 0 100% !important; max-width: 100% !important; }
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

function isCouponProduct(p) {
  const t = (p.productType || "").toLowerCase();
  return t.includes("coupon") || t.includes("gift") || t.includes("perk");
}


const TRANSLATIONS = {
  es: {
    headerTitle: "Unlock Your Stay Before Everyone Else",
    headerSubtitle: "Get your VIP coupons now and lock in priority access before dates are released.",
    cart: "Carrito",
    clear: "Limpiar",
    checkout: "Checkout",
    estimatedTotal: "Total estimado",
    quantity: "Cantidad",
    option: "Opción",
    addToCart: "Agregar al carrito",
    goToCheckout: "Ir al checkout",
    processing: "Procesando...",
    cartNote: "Se agregará al carrito. Sigue explorando.",
    checkoutNote: "Se abrirá el checkout de Shopify.",
    loading: "Cargando productos...",
    noProducts: "No se encontraron productos.",
    noImage: "Sin imagen",
    shopNow: "Checkout",
    inCart: "En carrito",
    configError: "Configura storeUrl y storefrontToken en las props.",
  },
  en: {
    headerTitle: "Unlock Your Stay Before Everyone Else",
    headerSubtitle: "Get your VIP coupons now and lock in priority access before dates are released.",
    cart: "Cart",
    clear: "Clear",
    checkout: "Checkout",
    estimatedTotal: "Estimated total",
    quantity: "Quantity",
    option: "Option",
    addToCart: "Add to cart",
    goToCheckout: "Go to checkout",
    processing: "Processing...",
    cartNote: "Added to cart. Keep browsing.",
    checkoutNote: "Shopify checkout will open.",
    loading: "Loading products...",
    noProducts: "No products found.",
    noImage: "No image",
    shopNow: "Checkout",
    inCart: "In cart",
    configError: "Please configure storeUrl and storefrontToken props.",
  },
};

const BagIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);

function ProductModal({ product, storeUrl, storefrontToken, onClose, t }) {
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(false);

  const variants = product.variants.edges;
  const selectedVariant = variants[selectedVariantIdx]?.node;
  const isCoupon = isCouponProduct(product);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  async function handleAction() {
    if (!selectedVariant) return;
    const vid = varId(selectedVariant.id);
    if (!storeUrl) { alert("Store not configured."); return; }
    window.open(`https://${storeUrl}/checkout?variant=${vid}&quantity=${qty}`, "_blank");
    onClose();
  }

  return (
    <div className="spv-modal-backdrop" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="spv-modal-card">
        <div className="spv-modal-header">
          <div className="spv-modal-title">{product.title}</div>
          <button className="spv-btn-sec" onClick={onClose}>✕</button>
        </div>
        <div className="spv-modal-layout">
          <div className="spv-modal-img">
            {product.featuredImage
              ? <img src={product.featuredImage.url} alt={product.title} />
              : <span>{t.noImage}</span>}
          </div>
          <div className="spv-modal-content">
            <div className="spv-modal-price">{fmtRange(product.priceRange, product.variants)}</div>
            {product.description && <div className="spv-modal-desc">{product.description}</div>}
            {variants.length > 0 && (
              <div>
                <label style={{ fontSize: 13, color: "#64748b", marginBottom: 6, display: "block" }}>{t.option}</label>
                <div className="spv-var-group">
                  {variants.map((e, i) => (
                    <button key={e.node.id} className={`spv-var-pill ${i === selectedVariantIdx ? "selected" : ""}`} onClick={() => setSelectedVariantIdx(i)}>
                      {e.node.title}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div className="spv-qty-row">
              <label>Cantidad</label>
              <div className="spv-qty-stepper">
                <button onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
                <input type="number" value={qty} onChange={(e) => setQty(Math.min(99, Math.max(1, parseInt(e.target.value) || 1)))} />
                <button onClick={() => setQty(q => Math.min(99, q + 1))}>+</button>
              </div>
            </div>
            <button className="spv-btn-green" onClick={handleAction} disabled={loading}>
              {loading ? "Procesando..." : <><BagIcon /> Ir al checkout</>}
            </button>
            <p className="spv-note">Se abrirá el checkout de Shopify.</p>
          </div>
        </div>
      </div>
    </div>
  );
}


function ProductCard({ product, onClick }) {
  return (
    <div className="spv-card" tabIndex={0} onClick={onClick} onKeyDown={(e) => { if (e.key === "Enter") onClick(); }}>
      <div className="spv-card-img">
        {product.featuredImage
          ? <img src={product.featuredImage.url} alt={product.title} />
          : <span>Sin imagen</span>}
      </div>
      <div className="spv-card-body">
        <div className="spv-card-title">{product.title}</div>
        <div className="spv-card-price">{fmtRange(product.priceRange, product.variants)}</div>
        <button className="spv-card-btn" onClick={(e) => { e.stopPropagation(); onClick(); }}>
          <BagIcon /> Checkout
        </button>
      </div>
    </div>
  );
}

export default function ShopifyProducts({
  storeUrl,
  storefrontToken,
  apiVersion = "2025-01",
  title = "Unlock Your Stay Before Everyone Else",
  subtitle = "Get your VIP coupons now and lock in priority access before dates are released.",
}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalProduct, setModalProduct] = useState(null);

  const fetchProducts = useCallback(async () => {
    if (!storeUrl || !storefrontToken) { setError("Configura storeUrl y storefrontToken en las props."); setLoading(false); return; }
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
      const filtered = allProducts.filter(p => {
        const isCoupon = (p.productType || "").toLowerCase().includes("coupon") ||
                         (p.productType || "").toLowerCase().includes("gift") ||
                         (p.productType || "").toLowerCase().includes("perk");
        if (isCoupon) return true;
        return p.variants.edges.some(e => e.node.availableForSale);
      });
      setProducts(filtered);
    } catch (err) { setError(`Error al cargar productos: ${err.message}`); }
    finally { setLoading(false); }
  }, [storeUrl, storefrontToken, apiVersion]);

  useEffect(() => { fetchProducts(); }, [fetchProducts]);

  return (
    <>
      <style>{css}</style>
      <div className="spv-wrap">
        <div className="spv-header">
          <h2 className="spv-header-title">{title}</h2>
          <p className="spv-header-subtitle">{subtitle}</p>
        </div>
        {error && <div className="spv-alert spv-alert-error">{error}</div>}
        <div className="spv-grid">
          {loading ? (
            <div className="spv-loading">Cargando productos...</div>
          ) : products.length === 0 ? (
            <div className="spv-empty">No se encontraron productos.</div>
          ) : (
            products.map(p => (
              <ProductCard key={p.id} product={p} onClick={() => setModalProduct(p)} />
            ))
          )}
        </div>
        {modalProduct && (
          <ProductModal product={modalProduct} storeUrl={storeUrl} storefrontToken={storefrontToken} onClose={() => setModalProduct(null)} />
        )}
      </div>
    </>
  );
}