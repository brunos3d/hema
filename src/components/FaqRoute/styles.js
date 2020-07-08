import styled from "styled-components";

export const Container = styled.div`
    & {
        max-width: 1000px;
        margin: 0 auto;
        padding: 20px;
    }

    .faq-title {
        display: flex;
        flex-direction: center;
        justify-content: center;

        & h1 {
            margin: 50px 0 30px 0;
            font-size: 2rem;
            font-weight: normal;
        }
    }
`;
