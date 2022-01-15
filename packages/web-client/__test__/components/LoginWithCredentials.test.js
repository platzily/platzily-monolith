import React from "react";
import { render, screen } from '@testing-library/react';
import ProviderMock from '../../__mocks__/providerMock';
import LoginWithCredentials from "../../components/LoginWithCredentials";


describe('LoginWithCredentials Component', () => {
    it('render component', () => {
        render(
            <ProviderMock>
                <LoginWithCredentials/>
            </ProviderMock>
        )
    })
});
