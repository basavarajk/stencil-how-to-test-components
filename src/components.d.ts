/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  SomethingHappened,
} from './components/testing-event-emitter/testing-event-emitter';

export namespace Components {
  interface CallbackTest {
    'clickProp': Function | undefined;
  }
  interface TestingClickEvent {}
  interface TestingEventEmitter {}
  interface TestingMethods {
    'incrementCount': () => Promise<number>;
  }
  interface TestingProps {
    'first': string;
    'last': string;
  }
  interface TestingPropsShadow {
    'first': string;
    'last': string;
  }
  interface TestingRender {}
  interface TestingUpdatesAriaProperty {}
  interface UsingSnapshots {
    'first': string;
    'last': string;
  }
}

declare global {


  interface HTMLCallbackTestElement extends Components.CallbackTest, HTMLStencilElement {}
  var HTMLCallbackTestElement: {
    prototype: HTMLCallbackTestElement;
    new (): HTMLCallbackTestElement;
  };

  interface HTMLTestingClickEventElement extends Components.TestingClickEvent, HTMLStencilElement {}
  var HTMLTestingClickEventElement: {
    prototype: HTMLTestingClickEventElement;
    new (): HTMLTestingClickEventElement;
  };

  interface HTMLTestingEventEmitterElement extends Components.TestingEventEmitter, HTMLStencilElement {}
  var HTMLTestingEventEmitterElement: {
    prototype: HTMLTestingEventEmitterElement;
    new (): HTMLTestingEventEmitterElement;
  };

  interface HTMLTestingMethodsElement extends Components.TestingMethods, HTMLStencilElement {}
  var HTMLTestingMethodsElement: {
    prototype: HTMLTestingMethodsElement;
    new (): HTMLTestingMethodsElement;
  };

  interface HTMLTestingPropsElement extends Components.TestingProps, HTMLStencilElement {}
  var HTMLTestingPropsElement: {
    prototype: HTMLTestingPropsElement;
    new (): HTMLTestingPropsElement;
  };

  interface HTMLTestingPropsShadowElement extends Components.TestingPropsShadow, HTMLStencilElement {}
  var HTMLTestingPropsShadowElement: {
    prototype: HTMLTestingPropsShadowElement;
    new (): HTMLTestingPropsShadowElement;
  };

  interface HTMLTestingRenderElement extends Components.TestingRender, HTMLStencilElement {}
  var HTMLTestingRenderElement: {
    prototype: HTMLTestingRenderElement;
    new (): HTMLTestingRenderElement;
  };

  interface HTMLTestingUpdatesAriaPropertyElement extends Components.TestingUpdatesAriaProperty, HTMLStencilElement {}
  var HTMLTestingUpdatesAriaPropertyElement: {
    prototype: HTMLTestingUpdatesAriaPropertyElement;
    new (): HTMLTestingUpdatesAriaPropertyElement;
  };

  interface HTMLUsingSnapshotsElement extends Components.UsingSnapshots, HTMLStencilElement {}
  var HTMLUsingSnapshotsElement: {
    prototype: HTMLUsingSnapshotsElement;
    new (): HTMLUsingSnapshotsElement;
  };
  interface HTMLElementTagNameMap {
    'callback-test': HTMLCallbackTestElement;
    'testing-click-event': HTMLTestingClickEventElement;
    'testing-event-emitter': HTMLTestingEventEmitterElement;
    'testing-methods': HTMLTestingMethodsElement;
    'testing-props': HTMLTestingPropsElement;
    'testing-props-shadow': HTMLTestingPropsShadowElement;
    'testing-render': HTMLTestingRenderElement;
    'testing-updates-aria-property': HTMLTestingUpdatesAriaPropertyElement;
    'using-snapshots': HTMLUsingSnapshotsElement;
  }
}

declare namespace LocalJSX {
  interface CallbackTest {
    'clickProp'?: Function | undefined;
  }
  interface TestingClickEvent {}
  interface TestingEventEmitter {
    'onSomethingHappened'?: (event: CustomEvent<SomethingHappened>) => void;
  }
  interface TestingMethods {}
  interface TestingProps {
    'first'?: string;
    'last'?: string;
  }
  interface TestingPropsShadow {
    'first'?: string;
    'last'?: string;
  }
  interface TestingRender {}
  interface TestingUpdatesAriaProperty {}
  interface UsingSnapshots {
    'first'?: string;
    'last'?: string;
  }

  interface IntrinsicElements {
    'callback-test': CallbackTest;
    'testing-click-event': TestingClickEvent;
    'testing-event-emitter': TestingEventEmitter;
    'testing-methods': TestingMethods;
    'testing-props': TestingProps;
    'testing-props-shadow': TestingPropsShadow;
    'testing-render': TestingRender;
    'testing-updates-aria-property': TestingUpdatesAriaProperty;
    'using-snapshots': UsingSnapshots;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'callback-test': LocalJSX.CallbackTest & JSXBase.HTMLAttributes<HTMLCallbackTestElement>;
      'testing-click-event': LocalJSX.TestingClickEvent & JSXBase.HTMLAttributes<HTMLTestingClickEventElement>;
      'testing-event-emitter': LocalJSX.TestingEventEmitter & JSXBase.HTMLAttributes<HTMLTestingEventEmitterElement>;
      'testing-methods': LocalJSX.TestingMethods & JSXBase.HTMLAttributes<HTMLTestingMethodsElement>;
      'testing-props': LocalJSX.TestingProps & JSXBase.HTMLAttributes<HTMLTestingPropsElement>;
      'testing-props-shadow': LocalJSX.TestingPropsShadow & JSXBase.HTMLAttributes<HTMLTestingPropsShadowElement>;
      'testing-render': LocalJSX.TestingRender & JSXBase.HTMLAttributes<HTMLTestingRenderElement>;
      'testing-updates-aria-property': LocalJSX.TestingUpdatesAriaProperty & JSXBase.HTMLAttributes<HTMLTestingUpdatesAriaPropertyElement>;
      'using-snapshots': LocalJSX.UsingSnapshots & JSXBase.HTMLAttributes<HTMLUsingSnapshotsElement>;
    }
  }
}


