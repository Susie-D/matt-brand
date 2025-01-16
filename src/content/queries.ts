import { NavQuery } from "../../types";
import { contentGqlFetcher } from "./fetch";

export const getContentNav = async() => {
    const query = `#graphql
    query NavbarCollection {
        navbarCollection {
            
            items {
            callToActionsCollection {
                items {
                label
                link
                }
            }
            logo {
                url
                height
                width
            }
            navHeader
            }
        }
    }
`

    const data = await contentGqlFetcher<NavQuery>({query});
    if (!data) {
        throw Error('oops');
    }
    return data;
}