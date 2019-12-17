import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Dashboard from '../dashboard/Dashboard'
import Controls from './Controls'// Test away!

import '@testing-library/jest-dom/extend-expect'



test('lock is disabled when gate is open', () => {
    const { getByText, rerender } = render(<Dashboard />)
    const closeButton = getByText(/close gate/i)
    const lockButton = getByText(/lock Gate/i)
    const lockFirstPass = getByText(/lock gate/i).disabled

    fireEvent.click(closeButton)
    fireEvent.click(lockButton)

    const lockSecondPass = getByText(/unlock gate/i).disabled

    expect(lockSecondPass).toBe(!lockFirstPass)

})

test('gate is disabled when lock is closed', () => {
    const { getByText, rerender } = render(<Dashboard />)
    const closeButton = getByText(/close gate/i)
    const lockButton = getByText(/lock Gate/i)

    const closeFirstPass = getByText(/close gate/i).disabled
    fireEvent.click(closeButton)
    fireEvent.click(lockButton)
    const closeSecondPass = getByText(/open gate/i).disabled

    expect(closeFirstPass).toBe(!closeSecondPass)

})