/**
 * @license Copyright 2020 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License'); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
/* eslint-disable max-len */

'use strict';

const i18n = require('../../lighthouse-core/lib/i18n/i18n.js');

const JoomlaIcon = `data:image/svg+xml,%3Csvg+width%3D%22256px%22+height%3D%22258px%22+viewBox%3D%220+0+256+258%22+version%3D%221.1%22+xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22+xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22+preserveAspectRatio%3D%22xMidYMid%22%3E%3Cg%3E%3Cpath+d%3D%22M255.6673%2C35.5610895+C255.6673%2C16.9537743+240.583222%2C1.8696965+221.975907%2C1.8696965+C204.986272%2C1.8696965+190.941136%2C14.4475642+188.627175%2C30.7986926+C188.411019%2C30.6841401+188.28551%2C30.619393+188.28551%2C30.619393+C160.733136%2C18.1919377+137.523798%2C40.2029572+137.523798%2C40.2029572+L76.132607%2C101.894973+L100.389852%2C125.254724+L149.802833%2C76.7093541+C172.8767%2C53.6344903+185.440623%2C69.2524825+185.440623%2C69.2524825+C202.81077%2C83.9261634+186.039284%2C101.296311+186.039284%2C101.296311+L210.896187%2C125.254724+C231.193899%2C103.332358+232.3713%2C84.1990973+226.201401%2C68.9785525+C242.812514%2C66.898677+255.6673%2C52.736+255.6673%2C35.5610895%22+fill%3D%22%23F9AE41%22%3E%3C%2Fpath%3E%3Cpath+d%3D%22M226.514179%2C190.506833+C226.628732%2C190.291673+226.693479%2C190.166163+226.693479%2C190.166163+C239.12193%2C162.612794+217.109914%2C139.404451+217.109914%2C139.404451+L155.416903%2C78.0112685+L132.058148%2C102.26951+L180.603518%2C151.68249+C203.678381%2C174.757354+188.060389%2C187.321276+188.060389%2C187.321276+C173.386708%2C204.691424+156.01656%2C187.919938+156.01656%2C187.919938+L132.058148%2C212.775844+C153.979518%2C233.073556+173.113774%2C234.250957+188.333323%2C228.081058+C190.413198%2C244.693167+204.576872%2C257.547953+221.751782%2C257.547953+C240.359097%2C257.547953+255.442179%2C242.463875+255.442179%2C223.85656+C255.442179%2C206.866926+242.865307%2C192.82179+226.514179%2C190.506833%22+fill%3D%22%23EE4035%22%3E%3C%2Fpath%3E%3Cpath+d%3D%22M155.941852%2C133.040311+L106.528872%2C181.584685+C83.4540078%2C204.660545+70.8900856%2C189.043549+70.8900856%2C189.043549+C53.5199377%2C174.368872+70.2914241%2C156.99972+70.2914241%2C156.99972+L45.4355175%2C133.041307+C25.1378054%2C154.962677+23.9604047%2C174.095938+30.1293074%2C189.316482+C13.5171984%2C191.396358+0.66340856%2C205.558039+0.66340856%2C222.733946+C0.66340856%2C241.341261+15.7474864%2C256.424342+34.3548016%2C256.424342+C51.3444358%2C256.425339+65.389572%2C243.848467+67.7035331%2C227.497339+C67.9196887%2C227.611891+68.0451984%2C227.675642+68.0451984%2C227.675642+C95.5985681%2C240.105089+118.806911%2C218.092078+118.806911%2C218.092078+L180.199097%2C156.399066+L155.941852%2C133.040311%22+fill%3D%22%234F91CD%22%3E%3C%2Fpath%3E%3Cpath+d%3D%22M75.7271907%2C106.612545+C52.6523268%2C83.5376809+68.2683268%2C70.9737588+68.2683268%2C70.9737588+C82.944%2C53.6036109+100.313152%2C70.3750973+100.313152%2C70.3750973+L124.271564%2C45.5201868+C102.350195%2C25.2224747+83.2169339%2C24.0450739+67.9973852%2C30.2139767+C65.9165136%2C13.6008716+51.7548327%2C0.747081712+34.57793%2C0.747081712+C15.9716109%2C0.747081712+0.888529183%2C15.8311595+0.887533074%2C34.4384747+C0.887533074%2C51.4291051+13.4644047%2C65.4742412+29.8155331%2C67.7882023+C29.7009805%2C68.004358+29.6372296%2C68.1298677+29.6372296%2C68.1298677+C17.206786%2C95.6822412+39.2197977%2C118.889588+39.2197977%2C118.889588+L100.913805%2C180.28277+L124.27256%2C156.025525+L75.7271907%2C106.612545%22+fill%3D%22%237AC043%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E`;

const UIStrings = {
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by removing unused CSS, in the context of the Joomla CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  unused_css_rules: 'Consider reducing, or switching, the number of [Joomla extensions](https://extensions.joomla.org/) loading unused CSS in your page. To identify extensions that are adding extraneous CSS, try running [code coverage](https://developers.google.com/web/updates/2017/04/devtools-release-notes#coverage) in Chrome DevTools. You can identify the theme/plugin responsible from the URL of the stylesheet. Look out for plugins that have many stylesheets in the list which have a lot of red in code coverage. A plugin should only enqueue a stylesheet if it is actually used on the page.',
  /** Additional description of a Lighthouse audit that tells the user how they can improve image loading by using webp in the context of the Joomla CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  uses_webp_images: 'Consider using a [plugin](https://extensions.joomla.org/instant-search/?jed_live%5Bquery%5D=webp) or service that will automatically convert your uploaded images to the optimal formats.',
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by lazy loading images that are initially offscreen in the context of the Joomla CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  offscreen_images: 'Install a [lazy-load Joomla plugin](https://extensions.joomla.org/instant-search/?jed_live%5Bquery%5D=lazy%20loading) that provides the ability to defer any offscreen images, or switch to a template that provides that functionality. Starting with Joomla 4.0 the core is shipping an dedicated lazyloading plugin please enable the "Content - Lazy Loading Images" plugin. Also consider using [an AMP plugin](https://extensions.joomla.org/instant-search/?jed_live%5Bquery%5D=amp).',
  /** Additional description of a Lighthouse audit that tells the user how they can improve site loading performance by reducing the total bytes delivered by their page in the context of the Joomla CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  total_byte_weight: 'Consider showing excerpts in your article categories (e.g. via the read more link), reducing the number of articles shown on a given page, breaking your long posts into multiple pages, or using a plugin to lazy-load comments.',
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by reducing the amount of render blocking resources present on their page, in the context of the Joomla CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  render_blocking_resources: 'There are a number of Joomla plugins that can help you [inline critical assets](https://extensions.joomla.org/instant-search/?jed_live%5Bquery%5D=performance) or [defer less important resources](https://extensions.joomla.org/instant-search/?jed_live%5Bquery%5D=performance). Beware that optimizations provided by these plugins may break features of your templates or plugins, so you will need to test these thoroughly.',
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by minifying their CSS files in the context of the Joomla CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  unminified_css: 'A number of [Joomla extensions](https://extensions.joomla.org/instant-search/?jed_live%5Bquery%5D=performance) can speed up your site by concatenating, minifying, and compressing your css styles. There are also templates that provide this functionality.',
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by minifying their Javascript files in the context of the Joomla CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  unminified_javascript: 'A number of [Joomla extensions](https://extensions.joomla.org/instant-search/?jed_live%5Bquery%5D=performance) can speed up your site by concatenating, minifying, and compressing your scripts. There are also templates that provide this functionality.',
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by encoding animated images as video, in the context of the Joomla CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  efficient_animated_content: 'Consider uploading your GIF to a service which will make it available to embed as an HTML5 video.',
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by removing unused Javascript files in the context of the Joomla CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  unused_javascript: 'Consider reducing, or switching, the number of [Joomla extensions](https://extensions.joomla.org/) loading unused JavaScript in your page. To identify plugins that are adding extraneous JS, try running [code coverage](https://developers.google.com/web/updates/2017/04/devtools-release-notes#coverage) in Chrome DevTools. You can identify the extension responsible from the URL of the script. Look out for extensions that have many scripts in the list which have a lot of red in code coverage. An extension should only enqueue a script if it is actually used on the page.',
  /** Additional description of a Lighthouse audit that tells the user how they can improve their site by enabling long caching in the context of the Joomla CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  uses_long_cache_ttl: 'Read about [Browser Caching in Joomla](https://docs.joomla.org/Cache).',
  /** Additional description of a Lighthouse audit that tells the user how they can improve site performance by optimizing images, in the context of the Joomla CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  uses_optimized_images: 'Consider using an [image optimization plugin](https://extensions.joomla.org/instant-search/?jed_live%5Bquery%5D=performance) that compresses your images while retaining quality.',
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance via enabling text compression in the context of the Joomla CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  uses_text_compression: 'You can enable text compression by enabling Gzip Page Compression in Joomla (System > Global configuration > Server).',
  /** Additional description of a Lighthouse audit that tells the user how they can improve performance by using responsive images in the context of the Joomla CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  uses_responsive_images: 'Consider using a [responsive images plugin](https://extensions.joomla.org/instant-search/?jed_live%5Bquery%5D=responsive%20images) to use responsive images in your content.',
  /** Additional description of a Lighthouse audit that tells the user how they can improve the server-response-time speed metric, in the context of the Joomla CMS platform. This is displayed after a user expands the section to see more. No character length limits. Links in (parenthesis) become link texts to additional documentation. */
  server_response_time: 'Templates, extensions, and server specifications all contribute to server response time. Consider finding a more optimized template, carefully selecting an optimization extension, and/or upgrading your server.',
};

const str_ = i18n.createMessageInstanceIdFn(__filename, UIStrings);

module.exports = {
  id: 'joomla',
  iconDataURL: JoomlaIcon,
  title: 'Joomla',
  descriptions: {
    'unused-css-rules': str_(UIStrings.unused_css_rules),
    'uses-webp-images': str_(UIStrings.uses_webp_images),
    'offscreen-images': str_(UIStrings.offscreen_images),
    'total-byte-weight': str_(UIStrings.total_byte_weight),
    'render-blocking-resources': str_(UIStrings.render_blocking_resources),
    'unminified-css': str_(UIStrings.unminified_css),
    'unminified-javascript': str_(UIStrings.unminified_javascript),
    'efficient-animated-content': str_(UIStrings.efficient_animated_content),
    'unused-javascript': str_(UIStrings.unused_javascript),
    'uses-long-cache-ttl': str_(UIStrings.uses_long_cache_ttl),
    'uses-optimized-images': str_(UIStrings.uses_optimized_images),
    'uses-text-compression': str_(UIStrings.uses_text_compression),
    'uses-responsive-images': str_(UIStrings.uses_responsive_images),
    'server-response-time': str_(UIStrings.server_response_time),
  },
};
module.exports.UIStrings = UIStrings;