import Image from 'next/image';
import styled from 'styled-components';


const LogoImage = styled(Image)`
    width: 300px;
    height: auto;
`;

const Logo = ({ asset }) => {

    let logoUrl = 'https:' + asset.fields.file.url;
    let logoWidth = asset.fields.file.details.image.width;
    let logoHeight = asset.fields.file.details.image.height;
    let logoAlt = asset.fields.description;

    return(
        <LogoImage 
            src={logoUrl}
            alt={logoAlt}
            width={logoWidth} 
            height={logoHeight}
        />
    )
}

export default Logo;