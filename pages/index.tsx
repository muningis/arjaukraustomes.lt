import styled from 'styled-components';
import Head from 'next/head'

const Ne = styled.span`
    font-size: 128px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Helvetica, Arial, sans-serif;;
    background: #ff6b00;
    color: #FFF;
    text-transform: uppercase;
    height: 100%;
`;

export default () => <>
    <Head>
        <title>Ar jau kraustomės?</title>
    </Head>
    <Ne>ne</Ne>
</>
