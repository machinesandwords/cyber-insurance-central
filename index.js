export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.hostname === 'www.cyberinsurancecentral.com') {
      url.hostname = 'cyberinsurancecentral.com';
      return Response.redirect(url.toString(), 301);
    }

    // Guide URL restructure: old flat guide URLs now live nested under
    // their category. Add one entry here per guide as each category gets
    // its own index page and its guides move under it.
    const GUIDE_REDIRECTS = {
      '/guides/renewal-leverage/': '/guides/renewal-and-ongoing-management/renewal-leverage/',
      '/guides/answering-renewal-questions/': '/guides/renewal-and-ongoing-management/answering-renewal-questions/',
    };

    if (GUIDE_REDIRECTS[url.pathname]) {
      url.pathname = GUIDE_REDIRECTS[url.pathname];
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};