
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/polyfills.CaHplocw.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/app.CuBPGYmZ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/VaultedContact.52QX7Ai5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/DeliveryMethodSelectorSection.EXxYO-BC.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/PurchaseOptionsAgreement.dIMSu9xZ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/VaultedDeliveryAddress.BS497VK9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/Rollup.pKH9A-CK.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useUnauthenticatedErrorModal.D_zS5PIV.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/ShopPayLogo.BlmMxdGZ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/Option.C1Zbtiiy.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/PickupPointCarrierLogo.D8etVsC9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/hooks.CGf4CYfe.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/LegacyVaultedShippingMethods.Chs6Yiy5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/OnePageModal.BwPwjdCY.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useSessionExchange.C93kr0x2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useGetUlcFrameUri.Ch2D5Bi1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/useShowShopPayOptin.CVe8XHTO.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/Section.2DOrQzKG.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/google-pay.DalVO-AN.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/PayButtonSection.4VwAKrlU.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/context.DgJKeCf8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/constants.DKYS1xsZ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/ButtonWithRegisterWebPixel.DM-pSwnJ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/NoAddressLocationFullDetour.CrwfIiF3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/DutyOptions.DvUvjeCg.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/SubscriptionPriceBreakdown.Cx1IL7S_.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/StockProblemsLineItemList.DC-0WaWV.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/component-ShopPayVerificationSwitch.DlkCZchH.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/app.DcM1B2YE.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/VaultedContact.CxMuAABI.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/DeliveryMethodSelectorSection.7LYaNSSo.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/Rollup.o9Mx-fKL.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/useUnauthenticatedErrorModal.DnkQ4tsk.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/ShopPayLogo.D_HPU8Dh.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/Option.BgrbqXV7.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/PickupPointCarrierLogo.C0wRU6wV.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/LegacyVaultedShippingMethods.CtgoyLeD.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/Section.sQehCocD.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/google-pay.D-Ox6Dnf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/PayButtonSection.DF7trkKf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/ButtonWithRegisterWebPixel.B6bwbcOx.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/NoAddressLocationFullDetour.DU8rC2PR.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/DutyOptions.Bd1Z60K2.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/SubscriptionPriceBreakdown.Bqs0s4oM.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/StockProblemsLineItemList.CxdIQKjw.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.pt-BR/assets/ShopPayVerificationSwitch.CAxiAssW.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  