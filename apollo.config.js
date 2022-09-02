module.exports = {
  client: {
    name: "Devportal WebClient",
    includes: ["graphql/**/*"],
    service: {
      name: "strapi-base",
      url: "http://localhost:1301/",
    },
  },
};
