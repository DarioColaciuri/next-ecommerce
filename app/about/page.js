import Image from "next/image"

export const metadata = {
    title: "About",
    description: "About Page"
}

export default function About() {
    return (
        <div className="container">
            <h1 className="text-4xl text-white text-center mb-10">About</h1>
            <article className="flex flex-row" >
                <p className="text-white mx-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, soluta sapiente. Reiciendis, iure est odio cumque ducimus mollitia autem corrupti officia cupiditate eos vel accusamus maiores, ipsum voluptas, similique aliquam.
                    Beatae magni atque veniam, deserunt ad nihil iste ducimus dicta esse ab magnam. Numquam maiores, incidunt sequi similique, hic magnam voluptas dolor tenetur saepe amet doloribus voluptatem recusandae, perferendis voluptatibus!
                    Perspiciatis adipisci, aliquam officiis nam consectetur voluptate facilis officia molestias expedita doloremque fugiat vero unde minus delectus odit nisi deserunt? Modi omnis eum aspernatur quidem minima reprehenderit. Sed, maiores quisquam.
                    Dolore repudiandae, eius ea mollitia beatae impedit fugit animi quam illo aliquid aspernatur libero tenetur harum! Nihil impedit libero est harum iusto, facere maiores quod odit qui id nulla. Ipsum?
                    Obcaecati mollitia iusto quae nulla eius harum saepe consequuntur commodi sint, ipsum cupiditate neque ipsa ex, magnam aliquam architecto, iure earum dolor qui exercitationem voluptas. Iure autem commodi blanditiis veniam.
                </p>
                <Image className="rounded-2xl" src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/09/01/16935357278457.jpg" alt="a shoe" width={600} height={600} />
            </article>
        </div>
    )
}