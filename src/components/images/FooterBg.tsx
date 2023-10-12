interface Props extends React.SVGProps<SVGSVGElement> {}

const FooterBG = (props: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1920'
      height='605'
      viewBox='0 0 1920 605'
      fill='none'
      {...props}
    >
      <path
        d='M0 11.4604L86.3034 2.99566C145.444 -2.8049 205.144 1.98341 262.604 17.1359L656.929 121.122C730.044 140.402 806.58 142.849 880.777 128.278L1485.35 9.54706C1577.03 -8.45698 1671.91 -0.415276 1759.25 32.7604L1954 106.736V605H0V11.4604Z'
        fill='#050A32'
        fill-opacity='0.88'
      />
    </svg>
  );
};

export default FooterBG;
