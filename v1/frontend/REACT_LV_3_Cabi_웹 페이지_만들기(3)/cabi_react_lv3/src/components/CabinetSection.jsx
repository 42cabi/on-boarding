import styled from 'styled-components';
import CabinetInfo from '@/components/CabinetInfo.jsx';

const CabinetSection = ({ section }) => {
    return (
    <CabinetBoxContainerStyled>
        {section.cabinets.map((cabinet) => (
        <CabinetInfo key={cabinet.cabinetId} cabinet={cabinet} />
        ))}
    </CabinetBoxContainerStyled>
    );
};

const CabinetBoxContainerStyled = styled.div`
    justify-content: center;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(8, 1fr);
    max-width: 80%;
    margin: 0 auto;

    @media all and (min-width: 769px) {
        grid-template-columns: repeat(8, 80px);
    }

    @media all and (min-width: 769px) and (max-width: 918px){
        grid-template-columns: repeat(5, 80px);
    }

    @media all and (min-width: 919px) and (max-width: 1100px){
        grid-template-columns: repeat(6, 80px);
    }

    @media all and (max-width: 768px) {
        grid-template-columns: repeat(4, 80px);
    }
`;

export default CabinetSection;