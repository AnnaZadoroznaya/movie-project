import ContentLoader from "react-content-loader"

const Sceleton: React.FunctionComponent = (props) => (
  <ContentLoader
    speed={2}
    width={200}
    height={400}
    viewBox="0 0 200 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="2" y="18" rx="20" ry="20" width="184" height="249" />
    <rect x="170" y="256" rx="0" ry="0" width="0" height="18" />
    <rect x="14" y="287" rx="10" ry="10" width="89" height="17" />
    <rect x="75" y="337" rx="0" ry="0" width="1" height="2" />
    <rect x="14" y="340" rx="10" ry="10" width="141" height="18" />
    <rect x="15" y="314" rx="10" ry="10" width="76" height="17" />
  </ContentLoader>
)

export default Sceleton;