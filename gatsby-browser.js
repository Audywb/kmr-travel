/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
import './src/styles/global.sass'

export const onClientEntry = () => {
    document.addEventListener('DOMContentLoaded', () => {
      const burgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
      burgers.forEach((el) => {
        el.addEventListener('click', () => {
          const target = el.dataset.target;
          const targetEl = document.getElementById(target);
          el.classList.toggle('is-active');
          targetEl.classList.toggle('is-active');
        });
      });
    });
  };