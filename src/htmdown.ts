import htm from "htm";
import marked from "marked";
import stripIndent from "strip-indent";

const JOINER = `<!--HTMDOWN-TEMPLATE-JOINER-->`;

type H<HResult> = (
  type: any,
  props: Record<string, any>,
  ...children: any[]
) => HResult;

function htmdown<HResult>(
  h: H<HResult>,
  strings: TemplateStringsArray,
  ...values: any[]
): HResult | HResult[] {
  // strip leading whitespace and indents so we don't accientally open a code block
  let markdownInput = stripIndent(strings.join(JOINER).replace(/^\n+/, ""));

  const htmlOutput = marked(markdownInput);

  // @ts-expect-error
  return htm.apply(h, [htmlOutput.split(JOINER), ...values]);
}

export default {
  bind<HResult>(h: H<HResult>) {
    return (strings: TemplateStringsArray, ...values: any[]) =>
      htmdown(h, strings, ...values);
  },
};
