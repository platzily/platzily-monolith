import React from 'react'
import { render, screen } from '@testing-library/react'
import ProviderMock from '../__mocks__/providerMock'
import Form from '../components/LoginForm'

describe('Form', () => {
  it('renders a Form', () => {
    render(
      <ProviderMock>
        <Form />
      </ProviderMock>
    )

  })
})