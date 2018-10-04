import { injectGlobal } from 'styled-components'

injectGlobal`

    @font-face {
        font-family: Tuna;
        src: url("../fonts/tuna.otf");
    }
    html, body {
        background-color: #fff;
        height: 100%;
    }

    #root {
        height: 100%;
    }
`