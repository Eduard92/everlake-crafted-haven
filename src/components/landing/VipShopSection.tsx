import { motion } from "framer-motion";
import { useEffect } from "react";
import CountdownTimer from "./CountdownTimer";

const VipShopSection = () => {
  useEffect(() => {
    // Load Shopify Buy Button script
    const existingScript = document.getElementById("shopify-buy-button-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "shopify-buy-button-script";
      script.src = "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
      script.async = true;
      script.onload = () => {
        initShopifyBuyButton();
      };
      document.head.appendChild(script);
    } else {
      initShopifyBuyButton();
    }
  }, []);

  const initShopifyBuyButton = () => {
    // @ts-ignore - Shopify global
    if (typeof ShopifyBuy === "undefined") return;

    // @ts-ignore
    const client = ShopifyBuy.buildClient({
      domain: "everlake-ga.myshopify.com",
      storefrontAccessToken: "4a2a39c0a67d9e67de13c575520cb0d9",
    });

    // @ts-ignore
    ShopifyBuy.UI.onReady(client).then((ui: any) => {
      const container = document.getElementById("shopify-collection-component");
      if (container && container.children.length === 0) {
        ui.createComponent("collection", {
          id: "333377003713",
          node: container,
          moneyFormat: "%24%7B%7Bamount%7D%7D",
          options: {
            product: {
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(33.33% - 30px)",
                    "margin-left": "30px",
                    "margin-bottom": "50px",
                  },
                },
                title: {
                  "font-family": "'DM Sans', sans-serif",
                  "font-size": "14px",
                  "letter-spacing": "0.05em",
                  color: "hsl(40, 33%, 96%)",
                },
                price: {
                  "font-family": "'DM Sans', sans-serif",
                  "font-size": "14px",
                  color: "hsl(38, 55%, 52%)",
                },
                button: {
                  "font-family": "'DM Sans', sans-serif",
                  "font-size": "12px",
                  "letter-spacing": "0.15em",
                  "padding-top": "14px",
                  "padding-bottom": "14px",
                  "background-color": "hsl(160, 30%, 18%)",
                  ":hover": {
                    "background-color": "hsl(145, 20%, 35%)",
                  },
                  "border-radius": "2px",
                },
              },
              text: {
                button: "Add to Cart",
              },
            },
            cart: {
              styles: {
                button: {
                  "font-family": "'DM Sans', sans-serif",
                  "background-color": "hsl(160, 30%, 18%)",
                  ":hover": {
                    "background-color": "hsl(145, 20%, 35%)",
                  },
                  "border-radius": "2px",
                },
              },
            },
            toggle: {
              styles: {
                toggle: {
                  "background-color": "hsl(160, 30%, 18%)",
                  ":hover": {
                    "background-color": "hsl(145, 20%, 35%)",
                  },
                },
              },
            },
          },
        });
      }
    });
  };

  return (
    <section id="vip-shop" className="section-dark py-24 md:py-36 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <p className="font-body text-xs tracking-[0.25em] uppercase text-everlake-gold mb-4">
            Exclusive VIP Access
          </p>
          <h2 className="text-editorial text-3xl md:text-5xl text-everlake-ivory leading-[1.05] mb-6">
            Unlock Your Stay<br />
            <span className="text-editorial-italic">Before Everyone Else</span>
          </h2>
          <p className="font-body text-sm text-everlake-ivory/50 max-w-lg mx-auto leading-relaxed">
            Get your VIP coupons now and lock in priority access before dates are released. 
            Thank you for believing in Everlake early — these rates are our way of saying thank you.
          </p>
          <CountdownTimer />
        </motion.div>

        {/* Shopify embed container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="shopify-embed-container mt-12"
        >
          <div id="shopify-collection-component" />
        </motion.div>
      </div>
    </section>
  );
};

export default VipShopSection;
