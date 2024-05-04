export default function Page({ params }: { params: { myName: string } }) {
    //console.log(params);
    return <div>My Post: {JSON.stringify(params)}</div>
  }