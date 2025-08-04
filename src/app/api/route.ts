
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const urlParam: string | null = searchParams.get('url');

    if (!urlParam) {
        return new Response(JSON.stringify({ error: 'URL obrigatória' }), {
            status: 400,
        });
    }

    const res = await fetch(urlParam, {
        method: 'GET',
        headers: {
            'Cookie': `user_is_logged=0; user_logged=null; _ga=GA1.1.1880355434.1754129794; _clck=19mdkyy%7C2%7Cfy4%7C0%7C2040; __eoi=ID=7e5d72c81b9c6e59:T=1754129795:RT=1754129795:S=AA-AfjbWfZGVYDP43J2c79UIMsxI; cf_clearance=VrMXDNHqvPNtOkVdI7dMIP_a5gGs7HebwUpHYj8bmqc-1754129809-1.2.1.1-ky_7UiekaF3AwW3yGOQTMZKFDrJNAz5Wf9l.CCMhMHDDWibeG2yezFhWa4oPH2zazNAjSYuBtJYYLq_WOmERu_Q3eMeQ6r6wkVDFwUtGdXFi1Oa5jVJDfYQVkc.dtu2gvS7.Hmq4ou7trcu0jh_qPSWadCD5WMNeI3PxNyIBYsKMfzCuOKrnsSIAR9tKzEfvYBsphKWgP1bngMtOVi7CL9e8FIInStvPYCVDL6Y00dY; _ga_KT8Z35D20V=GS2.1.s1754129794$o1$g1$t1754129956$j59$l0$h0; _clsk=1sp015a%7C1754129957482%7C3%7C1%7Ci.clarity.ms%2Fcollect; PHPSESSID=i95o0acqasgad2rqim16ohtsa6; CakeCookie[Skoob]=%7B%22usuario%22%3A%22imluceat%40gmail.com%2310726305%22%7D`
        }
    });

    const resp = await res.json()

    return new Response(JSON.stringify(resp), {
        status: res.status,
        headers: { 'content-type': 'application/json' },
    })
}