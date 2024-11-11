// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";

// Argon Dashboard 2 MUI base styles
import typography from "assets/theme/base/typography";

function Footer() {
  const { size } = typography;
  return (
    <ArgonBox
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      alignItems="center"
      px={1.5}
    >
      <ArgonBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        color="text"
        fontSize={size.sm}
        px={1.5}
      >
        &copy; 
        {/* Develop by Poomkiad Kunok */}
      </ArgonBox>
    </ArgonBox>
  );
}

export default Footer;
