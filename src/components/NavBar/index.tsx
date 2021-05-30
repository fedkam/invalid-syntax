import React from 'react';
import { Breakpoint } from 'react-socks';
import styled from 'styled-components';
import { ReactComponent as LogoEapteka } from '../../assets/images/logo_sber_eapteka.svg';
import { ReactComponent as HamburgerIcon } from '../../assets/images/icons/24/hamburger.svg';
import { ReactComponent as ShoppingСartIcon } from '../../assets/images/icons/24/shopping-cart.svg';



const ShoppingСartStyle = styled.div`
    display: flex;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
`;

const CircleIndicatorShoppingСart = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 19px;
    min-width: 19px;
    padding: 1px 4px;
    position: absolute;
    left: 34px;
    top: -8px;
    font-family: 'SB Sans Display';
    font-weight: 500;
    font-size: ${props => props.theme.fonts.sizes._10};
    border: 1px solid white;
    border-radius: 10px;
    color: white;
    background-color: ${props => props.theme.colors.red._200};
`;

const ShoppingСart = () => (
    <ShoppingСartStyle>
        <CircleIndicatorShoppingСart>
            144
        </CircleIndicatorShoppingСart>
        <ShoppingСartIcon />
    </ShoppingСartStyle>
)



const HamburgerButtonStyle = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    padding-right: 16px;
`;

const HamburgerButton = () => (
    <HamburgerButtonStyle>
        <HamburgerIcon />
    </HamburgerButtonStyle>
)




const NavBarStyle = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    padding: 0px 16px;
    border-bottom: 1px solid ${props => props.theme.colors.gray._400};
`;

export const NavBar = () => {
    return (
        <>
            <Breakpoint small down>
                <NavBarStyle>
                    <HamburgerButton />
                    <LogoEapteka />
                    <ShoppingСart />
                </NavBarStyle>
            </Breakpoint>
            <Breakpoint medium up>
                <div>это ведь десктоп</div>
            </Breakpoint>
        </>
    )
}