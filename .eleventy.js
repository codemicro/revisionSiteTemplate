const yaml = require("js-yaml");

module.exports = eleventyConfig => {
    eleventyConfig.addPassthroughCopy({ "src/_static/": "/" }); // copy static files to build root
    eleventyConfig.addDataExtension("yml", contents => yaml.safeLoad(contents));

    return {
        htmlTemplateEngine: "njk",
        dir: {
            input: "src",
        }
    };
};
