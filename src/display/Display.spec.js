// Test away!
import React from 'react'
import { render } from '@testing-library/react'
import { testNameToKey } from 'jest-snapshot/build/utils'
import Display from './Display'

test('defaults to open and unlocked, and displays those values', () => {
    const { getByText } = render(<Display />)
    const lockedElement = getByText(/unlocked/i)
    const closedElement = getByText(/open/i)

    expect(lockedElement).toBeTruthy()
    expect(closedElement).toBeTruthy()
})

test('displays locked and closed when locked and closed are true', () => {
    const { getByText } = render(<Display closed={true} locked={true} />)
    const lockedElement = getByText(/locked/i)
    const closedElement = getByText(/closed/i)

    expect(lockedElement).toBeTruthy()
    expect(closedElement).toBeTruthy()
})
test('applies led classes properly', () => {
    const { rerender } = render(<Display />)

    const greenLEDElems = document.getElementsByClassName('green-led')
    expect(greenLEDElems.length).toBe(2)

    rerender(<Display closed={true} locked={true} />)

    const redLEDElems = document.getElementsByClassName('red-led')
    expect(redLEDElems.length).toBe(2)

})



