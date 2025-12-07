import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: [
    "./src/index",
    {
      builder: "mkdist",
      input: "./src/package/components/",
      outDir: "./build/components",
    },
  ],
  rollup: {
    emitCJS: true,
  },

  outDir: "build",

  declaration: true,
  externals: ["react", "react-dom", "antd", "@ant-design/icons"],
});
