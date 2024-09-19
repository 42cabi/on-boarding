import styled from 'styled-components';

const CabinetInfo = ({ cabinet }) => {
    const Component = cabinet.status === 'AVAILABLE' ? AvailableCabinetStyled : FullCabinetStyled;
    
    return (
    <Component status={cabinet.status}>
        <div className="box-top">
            <img
            src={cabinet.status === 'AVAILABLE' ? 'src/assets/images/user.svg' : 'src/assets/images/user_full.svg'}
            alt="user icon"
            />
            <p>{cabinet.cabinetId}</p>
        </div>
        <p>{cabinet.user ? cabinet.user : '-'}</p>
    </Component>
    );
};

const FullCabinetStyled = styled.div`
    box-sizing: border-box;
    padding: 10px;
    width: 80px;
    height: 80px;
    background-color: var(--background-color);
    color: var(--text-main-color);
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;

    .box-top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        img {
            width: 16px;
        }
    }

    p {
        font-family: "Inter", sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 16.8px;
        text-align: left;
    }
`;

const AvailableCabinetStyled = styled.div`
    box-sizing: border-box;
    padding: 10px;
    width: 80px;
    height: 80px;
    background-color: var(--main-color);
    color: white;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;

    .box-top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        img {
            width: 16px;
        }
    }

    p {
        font-family: "Inter", sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 16.8px;
        text-align: left;
    }
`;

export default CabinetInfo;