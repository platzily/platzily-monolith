import { render, screen } from '@testing-library/react';

import ProviderMock from '../../__mocks__/providerMock';
import React from "react";
import RegisterForm from "../../components/RegisterForm";

describe('RegisterForm Component', () => {
    it('render component', () => {
        render(
            <ProviderMock>
                <RegisterForm/>
            </ProviderMock>
        )
    })
});
