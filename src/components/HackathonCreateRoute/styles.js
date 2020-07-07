import styled from "styled-components";

export const Container = styled.div`
    & {
        padding: 20px;
        margin: 0 auto;
        max-width: 1000px;
    }

    h1 {
        color: var(--pink-color);
        font-size: 1.5rem;
        font-weight: bold;
    }

    h2 {
        color: #000;
        font-weight: normal;
        font-size: 1.5rem;
    }

    .input-section {
        display: flex;
        flex-direction: column;

        padding: 25px;
        margin-top: 20px;
        border-radius: 20px;
        background-color: var(--bkg-color);
    }

    .input-text {
        flex: 1;
        border: none;
        margin: 10px 0;
        border-radius: 20px;
        padding: 10px 20px;

        font-size: 1.25rem;

        background-color: #fff;
        color: var(--grey-color);
    }

    .input-event-type {
        flex: 1;
        border: none;
        padding: 20px;
        border-radius: 20px;

        font-size: 1.25rem;

        color: var(--grey-color);
        background-color: #fff;
    }

    .input-event-type.active {
        color: #fff;
        background-color: var(--primary-color);
    }

    .input-radio {
        margin-left: 10px;
        font-size: 1.25rem;
        color: var(--grey-color);

        & input {
            margin-right: 10px;
        }
    }

    .btn-create-hackathon {
        border: none;
        padding: 10px 20px;
        border-radius: 20px;

        font-size: 1.25rem;

        color: #fff;
        background-color: var(--green-color);
    }
`;
