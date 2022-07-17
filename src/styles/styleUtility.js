
const PADDING_SIZE_01 = '.5rem';
const PADDING_SIZE_02 = '.8rem';
const PADDING_SIZE_03 = '1rem';
const PADDING_SIZE_04 = '1.2rem';
const PADDING_SIZE_05 = '1.5rem';
const PADDING_SIZE_06 = '1.8rem';
const PADDING_SIZE_07 = '2rem';
const PADDING_SIZE_08 = '2.3rem';
const PADDING_SIZE_09 = '2.5rem';
const PADDING_SIZE_10 = '3rem';

const MARGIN_SIZE_01 = '.8rem';
const MARGIN_SIZE_02 = '1.2rem';
const MARGIN_SIZE_03 = '1.8rem';
const MARGIN_SIZE_04 = '2.2rem';
const MARGIN_SIZE_05 = '3rem';
const MARGIN_SIZE_06 = '4rem';
const MARGIN_SIZE_07 = '5rem';
const MARGIN_SIZE_08 = '7rem';
const MARGIN_SIZE_09 = '9rem';
const MARGIN_SIZE_10 = '12rem';

const FONT_SIZE_XS  = '.6rem';
const FONT_SIZE_SM  = '.9rem';
const FONT_SIZE_MD  = '1rem';
const FONT_SIZE_LG  = '1.4rem';
const FONT_SIZE_XL  = '1.8rem';
const FONT_SIZE_XLL  = '2.2rem';
const FONT_SIZE_XXL = '2.5rem';
const FONT_SIZE_XXXL = '3rem';

const BREAKPOINT_SM  = '576px'; 
const BREAKPOINT_MD  = '768px'; 
const BREAKPOINT_LG  = '992px'; 
const BREAKPOINT_XL  = '1200px'; 
const BREAKPOINT_XXL = '1400px'; 



// style utility object
export const styleUtility = {
    padding :{
        p1:  `${PADDING_SIZE_01}`,
        p2:  `${PADDING_SIZE_02}`,
        p3:  `${PADDING_SIZE_03}`,
        p4:  `${PADDING_SIZE_04}`,
        p5:  `${PADDING_SIZE_05}`,
        p6:  `${PADDING_SIZE_06}`,
        p7:  `${PADDING_SIZE_07}`,
        p8:  `${PADDING_SIZE_08}`,
        p9:  `${PADDING_SIZE_09}`,
        p10: `${PADDING_SIZE_10}`,
    },
    margin: {
        m1: `${MARGIN_SIZE_01}`,
        m2: `${MARGIN_SIZE_02}`,
        m3: `${MARGIN_SIZE_03}`,
        m4: `${MARGIN_SIZE_04}`,
        m5: `${MARGIN_SIZE_05}`,
        m6: `${MARGIN_SIZE_06}`,
        m7: `${MARGIN_SIZE_07}`,
        m8: `${MARGIN_SIZE_08}`,
        m9: `${MARGIN_SIZE_09}`,
        m10: `${MARGIN_SIZE_10}`,
    },
    fsize:{
        xs:  `${FONT_SIZE_XS}`,
        sm:  `${FONT_SIZE_SM}`,
        md:  `${FONT_SIZE_MD}`,
        lg:  `${FONT_SIZE_LG}`,
        xl:  `${FONT_SIZE_XL}`,
        xll:  `${FONT_SIZE_XLL}`,
        xxl: `${FONT_SIZE_XXL}`,
        xxxl: `${FONT_SIZE_XXXL}`
    },
    break:{
        sm:  `${BREAKPOINT_SM}`,
        md:  `${BREAKPOINT_MD}`,
        lg:  `${BREAKPOINT_LG}`,
        xl:  `${BREAKPOINT_XL}`,
        xxl: `${BREAKPOINT_XXL}`,
    }
}