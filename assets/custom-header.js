class CustomHeader extends HTMLElement {
  constructor() {
    super();
    // const shadow = this.attachShadow({ mode: 'open' });

    // shadow.innerHTML = `
    //   <style>
    //     .header {
    //       display: flex;
    //       justify-content: space-between;
    //       align-items: center;
    //       padding: 1rem;
    //       background-color: #333;
    //       color: #fff;
    //     }
    //     .logo img {
    //       max-height: 50px;
    //     }
    //     .navigation {
    //       display: flex;
    //       gap: 1rem;
    //     }
    //     .navigation a {
    //       color: #fff;
    //       text-decoration: none;
    //     }
    //     .navigation a:hover {
    //       text-decoration: underline;
    //     }
    //     @media (max-width: 768px) {
    //       .header {
    //         flex-direction: column;
    //       }
    //       .navigation {
    //         flex-direction: column;
    //         gap: 0.5rem;
    //       }
    //     }
    //   </style>
    // `;
  }
}

customElements.define('custom-header', CustomHeader);
