import * as actions from "./actions";
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS
} from "./constants";
import nock from "nock"

import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

export const mockStore = configureMockStore([thunkMiddleware])

it("should create an action to search robots", () => {
    const text = "wooo";
    const expectedAction = {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }

    expect(actions.setSearchField(text)).toEqual(expectedAction)
})

it("handles requesting robots API", () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots())
    const action = store.getActions()
    const expectedAction = {
        type: REQUEST_ROBOTS_PENDING
    }
    expect(action[0]).toEqual(expectedAction)
})

describe("dispatching requestRobots", () => {
    afterEach(() => {
        nock.cleanAll();
    })

    it("handles getting an array of robots from the API", () => {
        nock('https://jsonplaceholder.typicode.com')
            .defaultReplyHeaders({
                'access-control-allow-origin': '*',
                'access-control-allow-credentials': 'true' 
            })
            .persist()
            .get("/users")
            .reply(200, [
                {
                    id: 1,
                    name: "bob"
                }
            ])
        const store = mockStore();
        return store.dispatch(actions.requestRobots()).then(() => {
            const action = store.getActions()
            const expectedAction = {
                type: REQUEST_ROBOTS_SUCCESS,
                payload: [{
                id: 1,
                name: "bob"
            }]
            }
            expect(action[1]).toEqual(expectedAction)
        })
    })

    it("handles getting an array of robots from the API", () => {
        nock('https://jsonplaceholder.typicode.com')
            .defaultReplyHeaders({
                'access-control-allow-origin': '*',
                'access-control-allow-credentials': 'true' 
            })
            .persist()
            .get("/users")
            .replyWithError("bad stuff")
        const store = mockStore();
        return store.dispatch(actions.requestRobots()).then(() => {
            const action = store.getActions()
            const expectedAction = {
                type: REQUEST_ROBOTS_FAILED,
                payload: "Network Error: Unable to request robots"
            }
            expect(action[1]).toEqual(expectedAction)
        })
    })
})
