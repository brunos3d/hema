import styled from "styled-components";

export const Container = styled.div`
    .App-header {
        height: 64px;

        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;

        background-color: var(--grey-color);
    }

    .rule {
        margin: 0 auto;
        max-width: 1000px;

        display: flex;
        flex-direction: row;

        align-items: center;
        justify-content: center;
    }

    .hema-logo {
        width: auto;
        height: 50px;
    }
`;
