import styled from "styled-components";

export const Container = styled.div`
    & {
        padding: 20px;
        margin: 0 auto;
        max-width: 1000px;

        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;
    }

    .search-container {
        width: 100%;
        margin-top: 50px;
        display: flex;
        flex-direction: row;
    }

    .events-container {
        width: 100%;
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-space-between;
    }

    .search {
        flex: 1;
        padding: 20px 30px;
        border: none;
        outline: none;

        border-radius: 20px;
        font-size: 1.5rem;

        color: #444;
        background-color: var(--bkg-color);
    }

    .btn-create-event {
        margin-left: 20px;
        padding: 20px 30px;

        border-radius: 20px;
        font-size: 1.5rem;

        text-decoration: none;

        color: #fff;
        background-color: var(--primary-color);
    }

    .event-card {
        flex: 1;
        width: 225px;
        height: 200px;
        margin: 10px;
        padding: 15px;
        border-radius: 20px;

        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        color: var(--grey-color);
        background-color: var(--bkg-color);
    }

    .event-card h1 {
        margin-top: 10px;
        font-size: 1.25rem;
        color: var(--grey-color);
    }

    .event-logo {
        width: 150px;
        height: auto;
    }
`;
