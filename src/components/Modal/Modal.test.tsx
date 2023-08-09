import React from "react"
import { render } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';
import Modal from "./Modal"

describe("Modal Component", () => {
  test("renders modal with children when open is true", () => {
    const { getByText } = render(
      <Modal open={true} onClose={() => { }}>
        <div>Modal Content</div>
      </Modal>
    )

    const modalContent = getByText("Modal Content")
    expect(modalContent).toBeInTheDocument()
  })

  test('does not render modal children when open is false', () => {
    const { queryByText } = render(
      <Modal open={false} onClose={() => { }}>
        <div>Modal Content</div>
      </Modal>
    );

    const modalContent = queryByText('Modal Content');
    expect(modalContent).toBeNull();
  });

  test('modal is closed by default when open prop is not provided', () => {
    const { queryByText } = render(
      <Modal onClose={() => { }}>
        <div>Modal Content</div>
      </Modal>
    );

    const modalContent = queryByText('Modal Content');
    expect(modalContent).toBeNull();
  });
})
