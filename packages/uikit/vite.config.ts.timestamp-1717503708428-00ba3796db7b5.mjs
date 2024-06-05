// vite.config.ts
import { defineConfig } from "file:///home/paulo-henrique/Documentos/CRYPTO/whalechain/IceCreamSwapUi/node_modules/.pnpm/vite@4.3.1_@types+node@18.16.2/node_modules/vite/dist/node/index.js";
import { vanillaExtractPlugin } from "file:///home/paulo-henrique/Documentos/CRYPTO/whalechain/IceCreamSwapUi/node_modules/.pnpm/@vanilla-extract+vite-plugin@3.8.0_@types+node@18.16.2_vite@4.3.1/node_modules/@vanilla-extract/vite-plugin/dist/vanilla-extract-vite-plugin.cjs.js";
import dts from "file:///home/paulo-henrique/Documentos/CRYPTO/whalechain/IceCreamSwapUi/node_modules/.pnpm/vite-plugin-dts@3.5.3_@types+node@18.16.2_rollup@2.70.1_typescript@5.1.3_vite@4.3.1/node_modules/vite-plugin-dts/dist/index.mjs";

// package.json
var package_default = {
  name: "@pancakeswap/uikit",
  version: "0.63.4",
  description: "Set of UI components for pancake projects",
  type: "module",
  main: "dist/index.cjs",
  module: "dist/index.js",
  types: "dist/index.d.ts",
  sideEffects: [
    "*.css.ts",
    "src/css/**/*",
    "src/theme/**/*"
  ],
  exports: {
    "./package.json": "./package.json",
    ".": {
      import: "./dist/index.js",
      require: "./dist/index.cjs"
    },
    "./styles": {
      import: "./dist/style.css",
      require: "./dist/style.css"
    },
    "./css/atoms": {
      import: "./src/css/atoms.ts",
      types: "./dist/css/atoms.d.ts"
    },
    "./css/responsiveStyle": {
      import: "./src/css/responsiveStyle.ts",
      types: "./dist/css/responsiveStyle.d.ts"
    }
  },
  repository: "https://github.com/pancakeswap/pancake-toolkit/tree/master/packages/pancake-uikit",
  license: "MIT",
  private: true,
  scripts: {
    build: "vite build",
    dev: "vite build --watch --mode development",
    start: "pnpm storybook",
    lint: "eslint 'src/**/*.{js,jsx,ts,tsx}'",
    "format:check": "prettier --check --loglevel error 'src/**/*.{js,jsx,ts,tsx}'",
    "format:write": "prettier --write 'src/**/*.{js,jsx,ts,tsx}'",
    storybook: "storybook dev -p 6006",
    "build:storybook": "storybook build",
    test: "vitest --run",
    "update:snapshot": "vitest -u",
    prepublishOnly: "pnpm run pkg:build",
    clean: "rm -rf .turbo && rm -rf node_modules && rm -rf dist"
  },
  devDependencies: {
    "@babel/core": "^7.20.12",
    "@babel/preset-env": "^7.20.2",
    "@babel/preset-react": "^7.18.6",
    "@pancakeswap/farms": "workspace:*",
    "@pancakeswap/hooks": "workspace:*",
    "@pancakeswap/pools": "workspace:*",
    "@pancakeswap/sdk": "workspace:*",
    "@pancakeswap/swap-sdk-core": "workspace:*",
    "@pancakeswap/token-lists": "workspace:*",
    "@pancakeswap/tokens": "workspace:*",
    "@pancakeswap/utils": "workspace:*",
    "@pancakeswap/v3-sdk": "workspace:*",
    "@rollup/plugin-json": "^4.1.0",
    "@rollup/plugin-typescript": "^8.2.1",
    "@rollup/plugin-url": "^6.0.0",
    "@sentry/nextjs": "^7.0.0",
    "@storybook/addon-a11y": "^7.0.7",
    "@storybook/addon-actions": "^7.0.7",
    "@storybook/addon-essentials": "^7.0.7",
    "@storybook/addon-links": "^7.0.7",
    "@storybook/builder-vite": "^7.0.7",
    "@storybook/react": "^7.0.7",
    "@storybook/react-vite": "^7.0.7",
    "@testing-library/jest-dom": "^5.11.6",
    "@testing-library/react": "^12.1.3",
    "@types/d3": "^7.4.0",
    "@types/js-cookie": "^3.0.2",
    "@types/lodash": "^4.14.168",
    "@types/react": "^18.2.21",
    "@types/react-dom": "^18.0.6",
    "@types/react-router-dom": "^5.1.7",
    "@types/react-transition-group": "^4.4.1",
    "@types/styled-system__should-forward-prop": "^5.1.2",
    "@vanilla-extract/vite-plugin": "^3.8.0",
    "@vitejs/plugin-react": "4.0.0",
    "babel-jest": "^29.3.1",
    "babel-loader": "^9.1.2",
    "babel-plugin-styled-components": "^1.12.0",
    d3: "^7.8.2",
    jest: "29.3.1",
    "jest-environment-jsdom": "^29.3.1",
    "jest-styled-components": "^7.0.8",
    "js-cookie": "*",
    next: "*",
    "next-seo": "*",
    "next-themes": "^0.2.1",
    polished: "^4.2.2",
    react: "^18.2.0",
    "react-countup": "^6.4.0",
    "react-device-detect": "*",
    "react-dom": "^18.2.0",
    "react-is": "^17.0.2",
    "react-markdown": "^6.0.2",
    "react-redux": "^8.0.5",
    "react-router-dom": "^5.2.0",
    "react-transition-group": "*",
    "remark-gfm": "*",
    rollup: "^2.70.1",
    "rollup-plugin-node-builtins": "^2.1.2",
    storybook: "^7.0.7",
    "styled-components": "^6.0.7",
    "themeprovider-storybook": "^1.7.2",
    "ts-jest": "^27.1.3",
    viem: "^1.2.9",
    vite: "^4.3.1",
    "vite-plugin-dts": "^3.5.3",
    "vite-tsconfig-paths": "^4.0.3",
    vitest: "^0.27.2",
    wagmi: "^1.3.10"
  },
  peerDependencies: {
    "@sentry/nextjs": "^7.0.0",
    "js-cookie": "*",
    next: "*",
    "next-seo": "*",
    "next-themes": "^0.2.1",
    react: "^18.2.0",
    "react-device-detect": "*",
    "react-dom": "^18.2.0",
    "react-redux": "^8.0.5",
    "react-transition-group": "*",
    "remark-gfm": "*",
    "styled-components": "^6.0.7",
    viem: "^1.2.9"
  },
  dependencies: {
    "@pancakeswap/farms": "workspace:*",
    "@pancakeswap/hooks": "workspace:*",
    "@pancakeswap/localization": "workspace:*",
    "@pancakeswap/pools": "workspace:*",
    "@pancakeswap/sdk": "workspace:*",
    "@pancakeswap/swap-sdk-core": "workspace:*",
    "@pancakeswap/token-lists": "workspace:*",
    "@pancakeswap/tokens": "workspace:*",
    "@pancakeswap/v3-sdk": "workspace:*",
    "@popperjs/core": "^2.9.2",
    "@radix-ui/react-dismissable-layer": "^1.0.3",
    "@radix-ui/react-slot": "^1.0.0",
    "@styled-system/should-forward-prop": "^5.1.5",
    "@types/styled-system": "^5.1.17",
    "@vanilla-extract/css": "^1.13.0",
    "@vanilla-extract/css-utils": "^0.1.3",
    "@vanilla-extract/recipes": "^0.5.0",
    "@vanilla-extract/sprinkles": "^1.6.1",
    "bignumber.js": "^9.0.0",
    clsx: "^1.2.1",
    csstype: "^3.1.2",
    "date-fns": "^2.29.3",
    deepmerge: "^4.0.0",
    "framer-motion": "10.16.4",
    "lightweight-charts": "^4.0.1",
    lodash: "^4.17.20",
    "react-popper": "^2.3.0",
    "styled-system": "^5.1.5",
    tslib: "^2.2.0"
  },
  publishConfig: {
    access: "public"
  }
};

// vite.config.ts
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      fileName: "index",
      formats: ["cjs", "es"]
    },
    rollupOptions: {
      external: [...Object.keys(package_default.peerDependencies), ...Object.keys(package_default.dependencies), "crypto"]
    }
  },
  plugins: [
    vanillaExtractPlugin({
      identifiers: "short"
    }),
    dts()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcGF1bG8taGVucmlxdWUvRG9jdW1lbnRvcy9DUllQVE8vd2hhbGVjaGFpbi9JY2VDcmVhbVN3YXBVaS9wYWNrYWdlcy91aWtpdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcGF1bG8taGVucmlxdWUvRG9jdW1lbnRvcy9DUllQVE8vd2hhbGVjaGFpbi9JY2VDcmVhbVN3YXBVaS9wYWNrYWdlcy91aWtpdC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9wYXVsby1oZW5yaXF1ZS9Eb2N1bWVudG9zL0NSWVBUTy93aGFsZWNoYWluL0ljZUNyZWFtU3dhcFVpL3BhY2thZ2VzL3Vpa2l0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB7IHZhbmlsbGFFeHRyYWN0UGx1Z2luIH0gZnJvbSBcIkB2YW5pbGxhLWV4dHJhY3Qvdml0ZS1wbHVnaW5cIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuXG5pbXBvcnQgcGtnIGZyb20gXCIuL3BhY2thZ2UuanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6IFwic3JjL2luZGV4LnRzXCIsXG4gICAgICBmaWxlTmFtZTogXCJpbmRleFwiLFxuICAgICAgZm9ybWF0czogW1wiY2pzXCIsIFwiZXNcIl0sXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogWy4uLk9iamVjdC5rZXlzKHBrZy5wZWVyRGVwZW5kZW5jaWVzKSwgLi4uT2JqZWN0LmtleXMocGtnLmRlcGVuZGVuY2llcyksIFwiY3J5cHRvXCJdLFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICB2YW5pbGxhRXh0cmFjdFBsdWdpbih7XG4gICAgICBpZGVudGlmaWVyczogXCJzaG9ydFwiLFxuICAgIH0pLFxuICAgIGR0cygpLFxuICBdLFxufSk7XG4iLCAie1xuICBcIm5hbWVcIjogXCJAcGFuY2FrZXN3YXAvdWlraXRcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMC42My40XCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTZXQgb2YgVUkgY29tcG9uZW50cyBmb3IgcGFuY2FrZSBwcm9qZWN0c1wiLFxuICBcInR5cGVcIjogXCJtb2R1bGVcIixcbiAgXCJtYWluXCI6IFwiZGlzdC9pbmRleC5janNcIixcbiAgXCJtb2R1bGVcIjogXCJkaXN0L2luZGV4LmpzXCIsXG4gIFwidHlwZXNcIjogXCJkaXN0L2luZGV4LmQudHNcIixcbiAgXCJzaWRlRWZmZWN0c1wiOiBbXG4gICAgXCIqLmNzcy50c1wiLFxuICAgIFwic3JjL2Nzcy8qKi8qXCIsXG4gICAgXCJzcmMvdGhlbWUvKiovKlwiXG4gIF0sXG4gIFwiZXhwb3J0c1wiOiB7XG4gICAgXCIuL3BhY2thZ2UuanNvblwiOiBcIi4vcGFja2FnZS5qc29uXCIsXG4gICAgXCIuXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L2luZGV4LmpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Rpc3QvaW5kZXguY2pzXCJcbiAgICB9LFxuICAgIFwiLi9zdHlsZXNcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3Qvc3R5bGUuY3NzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Rpc3Qvc3R5bGUuY3NzXCJcbiAgICB9LFxuICAgIFwiLi9jc3MvYXRvbXNcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL3NyYy9jc3MvYXRvbXMudHNcIixcbiAgICAgIFwidHlwZXNcIjogXCIuL2Rpc3QvY3NzL2F0b21zLmQudHNcIlxuICAgIH0sXG4gICAgXCIuL2Nzcy9yZXNwb25zaXZlU3R5bGVcIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL3NyYy9jc3MvcmVzcG9uc2l2ZVN0eWxlLnRzXCIsXG4gICAgICBcInR5cGVzXCI6IFwiLi9kaXN0L2Nzcy9yZXNwb25zaXZlU3R5bGUuZC50c1wiXG4gICAgfVxuICB9LFxuICBcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vcGFuY2FrZXN3YXAvcGFuY2FrZS10b29sa2l0L3RyZWUvbWFzdGVyL3BhY2thZ2VzL3BhbmNha2UtdWlraXRcIixcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gIFwicHJpdmF0ZVwiOiB0cnVlLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiYnVpbGRcIjogXCJ2aXRlIGJ1aWxkXCIsXG4gICAgXCJkZXZcIjogXCJ2aXRlIGJ1aWxkIC0td2F0Y2ggLS1tb2RlIGRldmVsb3BtZW50XCIsXG4gICAgXCJzdGFydFwiOiBcInBucG0gc3Rvcnlib29rXCIsXG4gICAgXCJsaW50XCI6IFwiZXNsaW50ICdzcmMvKiovKi57anMsanN4LHRzLHRzeH0nXCIsXG4gICAgXCJmb3JtYXQ6Y2hlY2tcIjogXCJwcmV0dGllciAtLWNoZWNrIC0tbG9nbGV2ZWwgZXJyb3IgJ3NyYy8qKi8qLntqcyxqc3gsdHMsdHN4fSdcIixcbiAgICBcImZvcm1hdDp3cml0ZVwiOiBcInByZXR0aWVyIC0td3JpdGUgJ3NyYy8qKi8qLntqcyxqc3gsdHMsdHN4fSdcIixcbiAgICBcInN0b3J5Ym9va1wiOiBcInN0b3J5Ym9vayBkZXYgLXAgNjAwNlwiLFxuICAgIFwiYnVpbGQ6c3Rvcnlib29rXCI6IFwic3Rvcnlib29rIGJ1aWxkXCIsXG4gICAgXCJ0ZXN0XCI6IFwidml0ZXN0IC0tcnVuXCIsXG4gICAgXCJ1cGRhdGU6c25hcHNob3RcIjogXCJ2aXRlc3QgLXVcIixcbiAgICBcInByZXB1Ymxpc2hPbmx5XCI6IFwicG5wbSBydW4gcGtnOmJ1aWxkXCIsXG4gICAgXCJjbGVhblwiOiBcInJtIC1yZiAudHVyYm8gJiYgcm0gLXJmIG5vZGVfbW9kdWxlcyAmJiBybSAtcmYgZGlzdFwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBiYWJlbC9jb3JlXCI6IFwiXjcuMjAuMTJcIixcbiAgICBcIkBiYWJlbC9wcmVzZXQtZW52XCI6IFwiXjcuMjAuMlwiLFxuICAgIFwiQGJhYmVsL3ByZXNldC1yZWFjdFwiOiBcIl43LjE4LjZcIixcbiAgICBcIkBwYW5jYWtlc3dhcC9mYXJtc1wiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAcGFuY2FrZXN3YXAvaG9va3NcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHBhbmNha2Vzd2FwL3Bvb2xzXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkBwYW5jYWtlc3dhcC9zZGtcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHBhbmNha2Vzd2FwL3N3YXAtc2RrLWNvcmVcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHBhbmNha2Vzd2FwL3Rva2VuLWxpc3RzXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkBwYW5jYWtlc3dhcC90b2tlbnNcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHBhbmNha2Vzd2FwL3V0aWxzXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkBwYW5jYWtlc3dhcC92My1zZGtcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHJvbGx1cC9wbHVnaW4tanNvblwiOiBcIl40LjEuMFwiLFxuICAgIFwiQHJvbGx1cC9wbHVnaW4tdHlwZXNjcmlwdFwiOiBcIl44LjIuMVwiLFxuICAgIFwiQHJvbGx1cC9wbHVnaW4tdXJsXCI6IFwiXjYuMC4wXCIsXG4gICAgXCJAc2VudHJ5L25leHRqc1wiOiBcIl43LjAuMFwiLFxuICAgIFwiQHN0b3J5Ym9vay9hZGRvbi1hMTF5XCI6IFwiXjcuMC43XCIsXG4gICAgXCJAc3Rvcnlib29rL2FkZG9uLWFjdGlvbnNcIjogXCJeNy4wLjdcIixcbiAgICBcIkBzdG9yeWJvb2svYWRkb24tZXNzZW50aWFsc1wiOiBcIl43LjAuN1wiLFxuICAgIFwiQHN0b3J5Ym9vay9hZGRvbi1saW5rc1wiOiBcIl43LjAuN1wiLFxuICAgIFwiQHN0b3J5Ym9vay9idWlsZGVyLXZpdGVcIjogXCJeNy4wLjdcIixcbiAgICBcIkBzdG9yeWJvb2svcmVhY3RcIjogXCJeNy4wLjdcIixcbiAgICBcIkBzdG9yeWJvb2svcmVhY3Qtdml0ZVwiOiBcIl43LjAuN1wiLFxuICAgIFwiQHRlc3RpbmctbGlicmFyeS9qZXN0LWRvbVwiOiBcIl41LjExLjZcIixcbiAgICBcIkB0ZXN0aW5nLWxpYnJhcnkvcmVhY3RcIjogXCJeMTIuMS4zXCIsXG4gICAgXCJAdHlwZXMvZDNcIjogXCJeNy40LjBcIixcbiAgICBcIkB0eXBlcy9qcy1jb29raWVcIjogXCJeMy4wLjJcIixcbiAgICBcIkB0eXBlcy9sb2Rhc2hcIjogXCJeNC4xNC4xNjhcIixcbiAgICBcIkB0eXBlcy9yZWFjdFwiOiBcIl4xOC4yLjIxXCIsXG4gICAgXCJAdHlwZXMvcmVhY3QtZG9tXCI6IFwiXjE4LjAuNlwiLFxuICAgIFwiQHR5cGVzL3JlYWN0LXJvdXRlci1kb21cIjogXCJeNS4xLjdcIixcbiAgICBcIkB0eXBlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwXCI6IFwiXjQuNC4xXCIsXG4gICAgXCJAdHlwZXMvc3R5bGVkLXN5c3RlbV9fc2hvdWxkLWZvcndhcmQtcHJvcFwiOiBcIl41LjEuMlwiLFxuICAgIFwiQHZhbmlsbGEtZXh0cmFjdC92aXRlLXBsdWdpblwiOiBcIl4zLjguMFwiLFxuICAgIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjogXCI0LjAuMFwiLFxuICAgIFwiYmFiZWwtamVzdFwiOiBcIl4yOS4zLjFcIixcbiAgICBcImJhYmVsLWxvYWRlclwiOiBcIl45LjEuMlwiLFxuICAgIFwiYmFiZWwtcGx1Z2luLXN0eWxlZC1jb21wb25lbnRzXCI6IFwiXjEuMTIuMFwiLFxuICAgIFwiZDNcIjogXCJeNy44LjJcIixcbiAgICBcImplc3RcIjogXCIyOS4zLjFcIixcbiAgICBcImplc3QtZW52aXJvbm1lbnQtanNkb21cIjogXCJeMjkuMy4xXCIsXG4gICAgXCJqZXN0LXN0eWxlZC1jb21wb25lbnRzXCI6IFwiXjcuMC44XCIsXG4gICAgXCJqcy1jb29raWVcIjogXCIqXCIsXG4gICAgXCJuZXh0XCI6IFwiKlwiLFxuICAgIFwibmV4dC1zZW9cIjogXCIqXCIsXG4gICAgXCJuZXh0LXRoZW1lc1wiOiBcIl4wLjIuMVwiLFxuICAgIFwicG9saXNoZWRcIjogXCJeNC4yLjJcIixcbiAgICBcInJlYWN0XCI6IFwiXjE4LjIuMFwiLFxuICAgIFwicmVhY3QtY291bnR1cFwiOiBcIl42LjQuMFwiLFxuICAgIFwicmVhY3QtZGV2aWNlLWRldGVjdFwiOiBcIipcIixcbiAgICBcInJlYWN0LWRvbVwiOiBcIl4xOC4yLjBcIixcbiAgICBcInJlYWN0LWlzXCI6IFwiXjE3LjAuMlwiLFxuICAgIFwicmVhY3QtbWFya2Rvd25cIjogXCJeNi4wLjJcIixcbiAgICBcInJlYWN0LXJlZHV4XCI6IFwiXjguMC41XCIsXG4gICAgXCJyZWFjdC1yb3V0ZXItZG9tXCI6IFwiXjUuMi4wXCIsXG4gICAgXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCI6IFwiKlwiLFxuICAgIFwicmVtYXJrLWdmbVwiOiBcIipcIixcbiAgICBcInJvbGx1cFwiOiBcIl4yLjcwLjFcIixcbiAgICBcInJvbGx1cC1wbHVnaW4tbm9kZS1idWlsdGluc1wiOiBcIl4yLjEuMlwiLFxuICAgIFwic3Rvcnlib29rXCI6IFwiXjcuMC43XCIsXG4gICAgXCJzdHlsZWQtY29tcG9uZW50c1wiOiBcIl42LjAuN1wiLFxuICAgIFwidGhlbWVwcm92aWRlci1zdG9yeWJvb2tcIjogXCJeMS43LjJcIixcbiAgICBcInRzLWplc3RcIjogXCJeMjcuMS4zXCIsXG4gICAgXCJ2aWVtXCI6IFwiXjEuMi45XCIsXG4gICAgXCJ2aXRlXCI6IFwiXjQuMy4xXCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1kdHNcIjogXCJeMy41LjNcIixcbiAgICBcInZpdGUtdHNjb25maWctcGF0aHNcIjogXCJeNC4wLjNcIixcbiAgICBcInZpdGVzdFwiOiBcIl4wLjI3LjJcIixcbiAgICBcIndhZ21pXCI6IFwiXjEuMy4xMFwiXG4gIH0sXG4gIFwicGVlckRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAc2VudHJ5L25leHRqc1wiOiBcIl43LjAuMFwiLFxuICAgIFwianMtY29va2llXCI6IFwiKlwiLFxuICAgIFwibmV4dFwiOiBcIipcIixcbiAgICBcIm5leHQtc2VvXCI6IFwiKlwiLFxuICAgIFwibmV4dC10aGVtZXNcIjogXCJeMC4yLjFcIixcbiAgICBcInJlYWN0XCI6IFwiXjE4LjIuMFwiLFxuICAgIFwicmVhY3QtZGV2aWNlLWRldGVjdFwiOiBcIipcIixcbiAgICBcInJlYWN0LWRvbVwiOiBcIl4xOC4yLjBcIixcbiAgICBcInJlYWN0LXJlZHV4XCI6IFwiXjguMC41XCIsXG4gICAgXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCI6IFwiKlwiLFxuICAgIFwicmVtYXJrLWdmbVwiOiBcIipcIixcbiAgICBcInN0eWxlZC1jb21wb25lbnRzXCI6IFwiXjYuMC43XCIsXG4gICAgXCJ2aWVtXCI6IFwiXjEuMi45XCJcbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQHBhbmNha2Vzd2FwL2Zhcm1zXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkBwYW5jYWtlc3dhcC9ob29rc1wiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAcGFuY2FrZXN3YXAvbG9jYWxpemF0aW9uXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkBwYW5jYWtlc3dhcC9wb29sc1wiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAcGFuY2FrZXN3YXAvc2RrXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkBwYW5jYWtlc3dhcC9zd2FwLXNkay1jb3JlXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkBwYW5jYWtlc3dhcC90b2tlbi1saXN0c1wiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAcGFuY2FrZXN3YXAvdG9rZW5zXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkBwYW5jYWtlc3dhcC92My1zZGtcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHBvcHBlcmpzL2NvcmVcIjogXCJeMi45LjJcIixcbiAgICBcIkByYWRpeC11aS9yZWFjdC1kaXNtaXNzYWJsZS1sYXllclwiOiBcIl4xLjAuM1wiLFxuICAgIFwiQHJhZGl4LXVpL3JlYWN0LXNsb3RcIjogXCJeMS4wLjBcIixcbiAgICBcIkBzdHlsZWQtc3lzdGVtL3Nob3VsZC1mb3J3YXJkLXByb3BcIjogXCJeNS4xLjVcIixcbiAgICBcIkB0eXBlcy9zdHlsZWQtc3lzdGVtXCI6IFwiXjUuMS4xN1wiLFxuICAgIFwiQHZhbmlsbGEtZXh0cmFjdC9jc3NcIjogXCJeMS4xMy4wXCIsXG4gICAgXCJAdmFuaWxsYS1leHRyYWN0L2Nzcy11dGlsc1wiOiBcIl4wLjEuM1wiLFxuICAgIFwiQHZhbmlsbGEtZXh0cmFjdC9yZWNpcGVzXCI6IFwiXjAuNS4wXCIsXG4gICAgXCJAdmFuaWxsYS1leHRyYWN0L3Nwcmlua2xlc1wiOiBcIl4xLjYuMVwiLFxuICAgIFwiYmlnbnVtYmVyLmpzXCI6IFwiXjkuMC4wXCIsXG4gICAgXCJjbHN4XCI6IFwiXjEuMi4xXCIsXG4gICAgXCJjc3N0eXBlXCI6IFwiXjMuMS4yXCIsXG4gICAgXCJkYXRlLWZuc1wiOiBcIl4yLjI5LjNcIixcbiAgICBcImRlZXBtZXJnZVwiOiBcIl40LjAuMFwiLFxuICAgIFwiZnJhbWVyLW1vdGlvblwiOiBcIjEwLjE2LjRcIixcbiAgICBcImxpZ2h0d2VpZ2h0LWNoYXJ0c1wiOiBcIl40LjAuMVwiLFxuICAgIFwibG9kYXNoXCI6IFwiXjQuMTcuMjBcIixcbiAgICBcInJlYWN0LXBvcHBlclwiOiBcIl4yLjMuMFwiLFxuICAgIFwic3R5bGVkLXN5c3RlbVwiOiBcIl41LjEuNVwiLFxuICAgIFwidHNsaWJcIjogXCJeMi4yLjBcIlxuICB9LFxuICBcInB1Ymxpc2hDb25maWdcIjoge1xuICAgIFwiYWNjZXNzXCI6IFwicHVibGljXCJcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErWixTQUFTLG9CQUFvQjtBQUM1YixTQUFTLDRCQUE0QjtBQUNyQyxPQUFPLFNBQVM7OztBQ0ZoQjtBQUFBLEVBQ0UsTUFBUTtBQUFBLEVBQ1IsU0FBVztBQUFBLEVBQ1gsYUFBZTtBQUFBLEVBQ2YsTUFBUTtBQUFBLEVBQ1IsTUFBUTtBQUFBLEVBQ1IsUUFBVTtBQUFBLEVBQ1YsT0FBUztBQUFBLEVBQ1QsYUFBZTtBQUFBLElBQ2I7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVc7QUFBQSxJQUNULGtCQUFrQjtBQUFBLElBQ2xCLEtBQUs7QUFBQSxNQUNILFFBQVU7QUFBQSxNQUNWLFNBQVc7QUFBQSxJQUNiO0FBQUEsSUFDQSxZQUFZO0FBQUEsTUFDVixRQUFVO0FBQUEsTUFDVixTQUFXO0FBQUEsSUFDYjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsUUFBVTtBQUFBLE1BQ1YsT0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBLHlCQUF5QjtBQUFBLE1BQ3ZCLFFBQVU7QUFBQSxNQUNWLE9BQVM7QUFBQSxJQUNYO0FBQUEsRUFDRjtBQUFBLEVBQ0EsWUFBYztBQUFBLEVBQ2QsU0FBVztBQUFBLEVBQ1gsU0FBVztBQUFBLEVBQ1gsU0FBVztBQUFBLElBQ1QsT0FBUztBQUFBLElBQ1QsS0FBTztBQUFBLElBQ1AsT0FBUztBQUFBLElBQ1QsTUFBUTtBQUFBLElBQ1IsZ0JBQWdCO0FBQUEsSUFDaEIsZ0JBQWdCO0FBQUEsSUFDaEIsV0FBYTtBQUFBLElBQ2IsbUJBQW1CO0FBQUEsSUFDbkIsTUFBUTtBQUFBLElBQ1IsbUJBQW1CO0FBQUEsSUFDbkIsZ0JBQWtCO0FBQUEs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
