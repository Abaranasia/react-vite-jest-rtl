const { screen, render } = require("@testing-library/react");
const { SimpleComp } = require("../../src/components/SimpleComp");

describe('SimpleComp tests', () => {

  const testText = "hello world";

  test('SimpleComp snapshot', () => {
    const { container } = render(
      <SimpleComp
        value={testText}
      />
    );

    expect(container).toMatchSnapshot();
  });

  test('SimpleComp snapshot', () => {
    render(
      <SimpleComp
        value={testText}
      />
    );

    expect(screen.getByText(testText)).toBeTruthy()
    expect(screen.getByRole('heading', { level: 3 }).innerHTML).toContain(testText);
  });
})