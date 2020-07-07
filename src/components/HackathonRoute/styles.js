import styled from "styled-components";

export const Container = styled.div`
    .side-bar {
        width: 400px;
        height: calc(100vh - 64px);
        background-color: var(--bkg-color);
    }

    .event-info {
        margin: 0 auto;
        max-width: 200px;

        display: flex;
        flex-direction: column;

        text-align: center;
        justify-content: center;

        & h1 {
            margin-top: 20px;
            font-size: 1.5rem;
            color: var(--grey-color);
        }
    }

    .event-logo {
        margin-top: 50px;
        width: 200px;
        height: auto;
    }

    .side-bar-container {
        margin-left: 50px;

        display: flex;
        flex-direction: column;

        justify-content: center;
    }

    .nav-links {
        margin-top: 30px;
    }

    .nav-link {
        color: var(--grey-color);
        text-decoration: none;
        font-size: 1.25rem;
        margin-top: 10px;
    }
`;
