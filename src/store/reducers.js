import * as types from "./constants"

const initialState = {
  dogapi_get_RandomDogImages: [],
  dogAPI: [],
  choices: [],
  worldTradingLeagueAPI: [],
  customTexts: [],
  homePages: [],
  questions: [],
  signups: [],
  steps: [],
  logins: [],
  passwordChanges: [],
  passwords: [],
  passwordResetConfirms: [],
  verifyEmails: [],
  userDetails: []
}

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.DOGAPI_GET_BREEDS_IMAGE_RANDOM_READ:
    case types.DOGAPI_GET_BREEDS_IMAGE_RANDOM_READ_SUCCEEDED:
      return Object.assign({}, state, {
        dogapi_get_RandomDogImages: [
          ...state.dogapi_get_RandomDogImages.filter(
            record => record.id !== action.response.id
          ),
          action.response
        ]
      })
    case types.DOGAPI_GET_BREEDS_IMAGE_RANDOM_READ_FAILED:
      return Object.assign({}, state, {
        dogAPI: [...state.dogAPI, action.response]
      })
    case types.API_V1_CHOICE_LIST:
    case types.API_V1_CHOICE_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        choices: [...state.choices, action.response]
      })
    case types.API_V1_CHOICE_LIST_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.API_V1_CHOICE_CREATE:
    case types.API_V1_CHOICE_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        choices: [...state.choices, action.response]
      })
    case types.API_V1_CHOICE_CREATE_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.API_V1_CHOICE_READ:
    case types.API_V1_CHOICE_READ_SUCCEEDED:
      return Object.assign({}, state, {
        choices: [
          ...state.choices.filter(record => record.id !== action.response.id),
          action.response
        ]
      })
    case types.API_V1_CHOICE_READ_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.API_V1_CHOICE_UPDATE:
    case types.API_V1_CHOICE_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        choices: state.choices.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_CHOICE_UPDATE_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.API_V1_CHOICE_PARTIAL_UPDATE:
    case types.API_V1_CHOICE_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        choices: state.choices.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_CHOICE_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.API_V1_CHOICE_DELETE:
    case types.API_V1_CHOICE_DELETE_SUCCEEDED:
    case types.API_V1_CHOICE_DELETE_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_LIST:
    case types.API_V1_CUSTOMTEXT_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        customTexts: [...state.customTexts, action.response]
      })
    case types.API_V1_CUSTOMTEXT_LIST_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_READ:
    case types.API_V1_CUSTOMTEXT_READ_SUCCEEDED:
      return Object.assign({}, state, {
        customTexts: [
          ...state.customTexts.filter(
            record => record.id !== action.response.id
          ),
          action.response
        ]
      })
    case types.API_V1_CUSTOMTEXT_READ_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_UPDATE:
    case types.API_V1_CUSTOMTEXT_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        customTexts: state.customTexts.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_CUSTOMTEXT_UPDATE_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE:
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        customTexts: state.customTexts.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_LIST:
    case types.API_V1_HOMEPAGE_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        homePages: [...state.homePages, action.response]
      })
    case types.API_V1_HOMEPAGE_LIST_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_READ:
    case types.API_V1_HOMEPAGE_READ_SUCCEEDED:
      return Object.assign({}, state, {
        homePages: [
          ...state.homePages.filter(record => record.id !== action.response.id),
          action.response
        ]
      })
    case types.API_V1_HOMEPAGE_READ_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_UPDATE:
    case types.API_V1_HOMEPAGE_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        homePages: state.homePages.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_HOMEPAGE_UPDATE_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE:
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        homePages: state.homePages.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.API_V1_LOGIN_CREATE:
    case types.API_V1_LOGIN_CREATE_SUCCEEDED:
    case types.API_V1_LOGIN_CREATE_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.API_V1_QUESTION_LIST:
    case types.API_V1_QUESTION_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        questions: [...state.questions, action.response]
      })
    case types.API_V1_QUESTION_LIST_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.API_V1_QUESTION_CREATE:
    case types.API_V1_QUESTION_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        questions: [...state.questions, action.response]
      })
    case types.API_V1_QUESTION_CREATE_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.API_V1_QUESTION_READ:
    case types.API_V1_QUESTION_READ_SUCCEEDED:
      return Object.assign({}, state, {
        questions: [
          ...state.questions.filter(record => record.id !== action.response.id),
          action.response
        ]
      })
    case types.API_V1_QUESTION_READ_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.API_V1_QUESTION_UPDATE:
    case types.API_V1_QUESTION_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        questions: state.questions.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_QUESTION_UPDATE_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.API_V1_QUESTION_PARTIAL_UPDATE:
    case types.API_V1_QUESTION_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        questions: state.questions.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_QUESTION_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.API_V1_QUESTION_DELETE:
    case types.API_V1_QUESTION_DELETE_SUCCEEDED:
    case types.API_V1_QUESTION_DELETE_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.API_V1_SIGNUP_CREATE:
    case types.API_V1_SIGNUP_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        signups: [...state.signups, action.response]
      })
    case types.API_V1_SIGNUP_CREATE_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.API_V1_STEP_LIST:
    case types.API_V1_STEP_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        steps: [...state.steps, action.response]
      })
    case types.API_V1_STEP_LIST_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.API_V1_STEP_CREATE:
    case types.API_V1_STEP_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        steps: [...state.steps, action.response]
      })
    case types.API_V1_STEP_CREATE_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.API_V1_STEP_READ:
    case types.API_V1_STEP_READ_SUCCEEDED:
      return Object.assign({}, state, {
        steps: [
          ...state.steps.filter(record => record.id !== action.response.id),
          action.response
        ]
      })
    case types.API_V1_STEP_READ_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.API_V1_STEP_UPDATE:
    case types.API_V1_STEP_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        steps: state.steps.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_STEP_UPDATE_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.API_V1_STEP_PARTIAL_UPDATE:
    case types.API_V1_STEP_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        steps: state.steps.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_STEP_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.API_V1_STEP_DELETE:
    case types.API_V1_STEP_DELETE_SUCCEEDED:
    case types.API_V1_STEP_DELETE_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.REST_AUTH_LOGIN_CREATE:
    case types.REST_AUTH_LOGIN_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        logins: [...state.logins, action.response]
      })
    case types.REST_AUTH_LOGIN_CREATE_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.REST_AUTH_LOGOUT_LIST:
    case types.REST_AUTH_LOGOUT_LIST_SUCCEEDED:
    case types.REST_AUTH_LOGOUT_LIST_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.REST_AUTH_LOGOUT_CREATE:
    case types.REST_AUTH_LOGOUT_CREATE_SUCCEEDED:
    case types.REST_AUTH_LOGOUT_CREATE_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE:
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        passwordChanges: [...state.passwordChanges, action.response]
      })
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.REST_AUTH_PASSWORD_RESET_CREATE:
    case types.REST_AUTH_PASSWORD_RESET_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        passwords: [...state.passwords, action.response]
      })
    case types.REST_AUTH_PASSWORD_RESET_CREATE_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE:
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        passwordResetConfirms: [...state.passwordResetConfirms, action.response]
      })
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.REST_AUTH_REGISTRATION_CREATE:
    case types.REST_AUTH_REGISTRATION_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        signups: [...state.signups, action.response]
      })
    case types.REST_AUTH_REGISTRATION_CREATE_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE:
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        verifyEmails: [...state.verifyEmails, action.response]
      })
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.REST_AUTH_USER_READ:
    case types.REST_AUTH_USER_READ_SUCCEEDED:
      return Object.assign({}, state, {
        userDetails: [
          ...state.userDetails.filter(
            record => record.id !== action.response.id
          ),
          action.response
        ]
      })
    case types.REST_AUTH_USER_READ_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.REST_AUTH_USER_UPDATE:
    case types.REST_AUTH_USER_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        userDetails: state.userDetails.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.REST_AUTH_USER_UPDATE_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    case types.REST_AUTH_USER_PARTIAL_UPDATE:
    case types.REST_AUTH_USER_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        userDetails: state.userDetails.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.REST_AUTH_USER_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        worldTradingLeagueAPI: [...state.worldTradingLeagueAPI, action.response]
      })
    default:
      return state
  }
}
