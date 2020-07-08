import styled from "styled-components";

export const Container = styled.div`
    .side-bar {
        width: 400px;
        min-height: calc(100vh - 64px);
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

    .event-container {
        flex: 1;
        padding: 30px;

        display: flex;
        flex-direction: column;
    }

    .fact-title {
        color: var(--grey-color);
        font-size: 2rem;
        font-weight: bold;
    }

    .btn-edit,
    .btn-faq {
        border: none;
        padding: 20px;
        border-radius: 20px;

        text-decoration: none;

        font-size: 1.25rem;

        color: var(--grey-color);
        background-color: var(--bkg-color);

        transition: 0.3s all;
        border: 2px solid var(--bkg-color);
    }

    .btn-edit:hover,
    .btn-faq:hover {
        border: 2px solid var(--pink-color);
    }

    .card-section {
        flex: 1;
        margin: 15px 15px;
        padding: 30px;
        border-radius: 20px;
        border: 2px solid var(--bkg-color);

        & h1 {
            margin: 10px 0;
            font-size: 1.5rem;
            color: var(--pink-color);
        }

        & h2 {
            margin: 20px 0 10px 0;
            font-size: 1.5rem;
            color: var(--grey-color);
        }
    }

    .event-type-badge {
        margin-left: 10px;
        padding: 5px 10px;
        color: #fff;
        font-size: 1rem;
        font-weight: normal;
        border-radius: 20px;
        background-color: var(--pink-color);
    }

    .info-value {
        font-weight: bold;
    }
    .info-label {
        font-weight: normal;
    }

    .info-label,
    .info-value {
        margin: 10px 0;
        font-size: 1.25rem;
        color: var(--grey-color);
    }
`;
