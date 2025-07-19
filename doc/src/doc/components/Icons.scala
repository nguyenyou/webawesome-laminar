package doc.components

import com.raquo.laminar.api.L
import com.raquo.laminar.api.L.*

object Icons {

  def Icon(
      d: String,
      height: String = "16",
      width: String = "16"
  ): SvgElement = {
    svg.svg(
      svg.height         := height,
      svg.strokeLineJoin := "round",
      svg.viewBox        := "0 0 16 16",
      svg.width          := width,
      svg.path(
        svg.fillRule := "evenodd",
        svg.clipRule := "evenodd",
        svg.d        := d,
        svg.fill     := "currentColor"
      )
    )
  }

  def codeIcon = Icon(
    "M7.22763 14.1819L10.2276 2.18193L10.4095 1.45432L8.95432 1.09052L8.77242 1.81812L5.77242 13.8181L5.59051 14.5457L7.04573 14.9095L7.22763 14.1819ZM3.75002 12.0607L3.21969 11.5304L0.39647 8.70713C0.00594559 8.31661 0.00594559 7.68344 0.39647 7.29292L3.21969 4.46969L3.75002 3.93936L4.81068 5.00002L4.28035 5.53035L1.81068 8.00003L4.28035 10.4697L4.81068 11L3.75002 12.0607ZM12.25 12.0607L12.7804 11.5304L15.6036 8.70713C15.9941 8.31661 15.9941 7.68344 15.6036 7.29292L12.7804 4.46969L12.25 3.93936L11.1894 5.00002L11.7197 5.53035L14.1894 8.00003L11.7197 10.4697L11.1894 11L12.25 12.0607Z"
  )

  def windowIcon = Icon(
    "M2.75 2C1.7835 2 1 2.7835 1 3.75V12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14H15C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12V3.75C15 2.7835 14.2165 2 13.25 2H2.75ZM13.5 12V3.75C13.5 3.61193 13.3881 3.5 13.25 3.5H2.75C2.61193 3.5 2.5 3.61193 2.5 3.75V12H13.5Z"
  )

  def githubIcon(width: String = "24", height: String = "24"): SvgElement = {
    svg.svg(
      svg.width          := width,
      svg.height         := height,
      svg.viewBox        := "0 0 24 24",
      svg.fill           := "none",
      svg.stroke         := "currentColor",
      svg.strokeWidth    := "2",
      svg.strokeLineCap  := "round",
      svg.strokeLineJoin := "round",
      svg.path(
        svg.d := "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
      ),
      svg.path(
        svg.d := "M9 18c-4.51 2-5-2-7-2"
      )
    )
  }

}
