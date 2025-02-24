import Link from "next/link";

const linkStyle = {
  marginRight: "1rem",
};

const { marginRight } = linkStyle;

// linkStyle.marginRight
// marginRight

const context = {
  req: {
    headers: {
      cookie: "oeauhfidsbgdskgdsfkjd",
    },
  },
};

linkStyle.marginRight;

// const marginRight = "1rem";

const Header = () => (
  <div>
    <Link href="/">
      <a
        style={{
          marginRight,
        }}
      >
      </a>
    </Link>
    <Link href="/about">
      <a style={{ marginRight: "1rem" }}>소개</a>
    </Link>
  </div>
);

export default Header;

// const temp = 0124;
const temp = {
  test: "0124",
};

function test({ test }) {
  //const test = '0124'
  //const test = {test : '0124'}
  console.log(test);
}

test(temp);

// const test= {
//     test:"0124"
// }
