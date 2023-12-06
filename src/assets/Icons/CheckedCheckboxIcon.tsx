import React, { FC } from 'react';

const CheckedCheckboxIcon: FC = () => {
  return (
    <React.Fragment>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 20 20'
      >
        <g fill='none' fillRule='evenodd' stroke='none' strokeWidth='1'>
          <g transform='translate(-165 -749)'>
            <g transform='translate(165 620)'>
              <g transform='translate(0 61)'>
                <g transform='translate(0 68)'>
                  <path d='M0 0H20V20H0z'></path>
                  <path
                    fill='#CDA950'
                    d='M13.255 2.5c2.542 0 4.245 1.785 4.245 4.44v6.128c0 2.647-1.703 4.432-4.245 4.432H6.752C4.21 17.5 2.5 15.715 2.5 13.068V6.94c0-2.655 1.71-4.44 4.253-4.44h6.502zm-.12 5.25a.66.66 0 00-.93 0l-3.098 3.098-1.312-1.313a.66.66 0 00-.93 0 .66.66 0 000 .93l1.785 1.777a.641.641 0 00.457.188c.173 0 .338-.06.466-.188l3.562-3.562a.66.66 0 000-.93z'
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </React.Fragment>
  );
};
export default CheckedCheckboxIcon;
