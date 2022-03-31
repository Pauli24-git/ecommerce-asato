import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const productosRecibidosBackEnd = [
    {
      id: "3444AX34",
      title: "Pantalon",
      price: 1400,
      pictureUrl: "https://source.unsplash.com/random/300x200/?pant",
    },
    {
      id: "3615IC99",
      title: "Remera manga corta",
      price: 700,
      pictureUrl: "https://source.unsplash.com/random/300x200/?shirt",
    },
    {
      id: "4543FC21",
      title: "Remera mangas cocidas",
      price: 900,
      pictureUrl: "https://source.unsplash.com/random/300x200/?tshirt",
    },
    {
      id: "5454DD22",
      title: "Camperon Miley Cyrus sacandose fotos con gendarmeria",
      price: 5699,
      pictureUrl: "https://source.unsplash.com/random/300x200/?hoodie",
    },
  ];

  const [productos, setProductos] = useState([]);

  const promesa = new Promise((res, rej) => {
    setTimeout(() => {
      res(productosRecibidosBackEnd);
    }, 3000);
  });

  useEffect(() => {
    promesa
      .then((prods) => {
        setProductos(prods);
      })
      .catch(() => {
        console.log("Error, solicitud rechazada");
      });
  }, []);

  return (
    // <>
    //   <Stack spacing={1}>
    //     <Skeleton variant="circular" width={40} height={40} />
    //     <Skeleton variant="rectangular" width={210} height={118} />
    //     <Skeleton variant="circular" width={40} height={40} />
    //     <Skeleton variant="rectangular" width={210} height={118} />
    //     <Skeleton variant="circular" width={40} height={40} />
    //     <Skeleton variant="rectangular" width={210} height={118} />
    //     <Skeleton variant="circular" width={40} height={40} />
    //     <Skeleton variant="rectangular" width={210} height={118} />
    //     <Skeleton variant="circular" width={40} height={40} />
    //     <Skeleton variant="rectangular" width={210} height={118} />
    //     <Skeleton variant="circular" width={40} height={40} />
    //     <Skeleton variant="rectangular" width={210} height={118} />
    //     <Skeleton variant="circular" width={40} height={40} />
    //     <Skeleton variant="rectangular" width={210} height={118} />
    //     <Skeleton variant="circular" width={40} height={40} />
    //     <Skeleton variant="rectangular" width={210} height={118} />
    //     <Skeleton variant="circular" width={40} height={40} />
    //     <Skeleton variant="rectangular" width={210} height={118} />
    //     <Skeleton variant="circular" width={40} height={40} />
    //     <Skeleton variant="rectangular" width={210} height={118} />
    //   </Stack>
    // </>
    <ItemList productos={productos}></ItemList>
  );
}
