/** <b>태그로 감싸진 string을 bold텍스트로 변환
 * 정규식으로 <b>태그를 찾은 뒤 해당 문자열을 실제 <b>태그로 감쌈
 * <b>태그로 감싸지지 않은 문자는 그대로 둠
 * 이 둘을 합쳐서 return
 */
export const Btag2BoldText = (text: string) => {
  const parts = text.split(/(<b>.*?<\/b>)/gi);

  return parts.map((part, index) => {
    if (part.startsWith("<b>") && part.endsWith("</b>")) {
      return <b key={index}>{part.substring(3, part.length - 4)}</b>;
    }
    return part;
  });
};

/** html엔티티 디코드 */
export const decodeHtmlEntities = (text: string) => {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#96;/g, "`");
};
