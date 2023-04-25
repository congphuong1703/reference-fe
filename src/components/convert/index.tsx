type InputCaseType = 'camel' | 'snake'

interface ConvertedType {
  [key: string]: ConvertedType

  [index: number]: ConvertedType
}

// Can deep convert snake_case objects to camelCase and the other way
export default class CamelCaseConverter {
  static convertKeys = (inputCase: InputCaseType, input: any): any => {
    const convertFunc =
      inputCase === 'camel'
        ? CamelCaseConverter.toCamel
        : CamelCaseConverter.toSnake
    if (CamelCaseConverter.isObject(input)) {
      const n: ConvertedType = {}

      Object.keys(input).forEach((k) => {
        n[convertFunc(k)] = CamelCaseConverter.convertKeys(inputCase, input[k])
      })

      return n
    }
    if (Array.isArray(input)) {
      return input.map((i) => {
        return CamelCaseConverter.convertKeys(inputCase, i)
      })
    }

    return input
  }

  public static toCamel = (string: string): string => {
    return string.replace(/([-_][a-z])/gi, ($1) => {
      return $1.toUpperCase().replace('-', '').replace('_', '')
    })
  }

  public static toSnake = (string: string): string => {
    return string
      .replace(/[\w]([A-Z])/g, (m) => {
        return `${m[0]}_${m[1]}`
      })
      .toLowerCase()
  }

  private static isObject = (o: any): boolean => {
    return o === Object(o) && !Array.isArray(o) && typeof o !== 'function'
  }
}