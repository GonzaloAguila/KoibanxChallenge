import { baseURI } from './constants';

export const fetchData = (values) => {
    const { querys, Activo } = values;
    const onlyStatusRoute = `${baseURI}?q={"Activo":${Activo}}`;
    const valuesAndStatusRoute = `${baseURI}?q={"$and":[{'Activo':'${Activo}'},{"$or":[{"CUIL":{"$regex":".${querys}*"}},{"ID":{"$regex":".${querys}*"}},{"Comercio":{"$regex":".${querys}*"}}]}]}`;
    const onlyValuesRoute = `${baseURI}?q={"$or":[{"CUIL":{"$regex":".${querys}*"}},{"ID":{"$regex":".${querys}*"}},{"Comercio":{"$regex":".${querys}*"}}]}`;

    if (!querys) {
        return Activo ? onlyStatusRoute : baseURI;
    } else {
        return Activo ? valuesAndStatusRoute : onlyValuesRoute;
    }
};

